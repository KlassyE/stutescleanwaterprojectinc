const fs = require('node:fs/promises')
const path = require('node:path')

const ROOT = __dirname
const MANIFEST_PATH = path.join(ROOT, 'manifest.json')
const OUTPUT_DIR = path.join(ROOT, 'images')
const FAILURE_PATH = path.join(ROOT, 'download-failures.json')
const CONCURRENCY = 6
const RETRIES = 3

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

async function isExistingFileValid(filePath) {
  try {
    const stat = await fs.stat(filePath)
    return stat.isFile() && stat.size > 0
  } catch {
    return false
  }
}

async function downloadPhoto(photo) {
  const destination = path.join(OUTPUT_DIR, photo.filename)
  const temporary = `${destination}.part`

  if (await isExistingFileValid(destination)) {
    return { status: 'skipped', photo }
  }

  let lastError
  for (let attempt = 1; attempt <= RETRIES; attempt += 1) {
    try {
      const response = await fetch(photo.sourceUrl, {
        redirect: 'follow',
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`)
      }

      const contentType = response.headers.get('content-type') || ''
      if (!contentType.startsWith('image/')) {
        throw new Error(`Unexpected content type: ${contentType || 'unknown'}`)
      }

      const bytes = Buffer.from(await response.arrayBuffer())
      if (bytes.length === 0) throw new Error('Downloaded file is empty')

      await fs.writeFile(temporary, bytes)
      await fs.rename(temporary, destination)
      return { status: 'downloaded', photo, bytes: bytes.length }
    } catch (error) {
      lastError = error
      await fs.rm(temporary, { force: true })
      if (attempt < RETRIES) await sleep(600 * 2 ** (attempt - 1))
    }
  }

  return { status: 'failed', photo, error: String(lastError) }
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'))
  const photos = manifest.photos
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  let cursor = 0
  let completed = 0
  let downloaded = 0
  let skipped = 0
  let totalBytes = 0
  const failures = []

  async function worker() {
    while (true) {
      const index = cursor
      cursor += 1
      if (index >= photos.length) return

      const result = await downloadPhoto(photos[index])
      completed += 1

      if (result.status === 'downloaded') {
        downloaded += 1
        totalBytes += result.bytes
      } else if (result.status === 'skipped') {
        skipped += 1
      } else {
        failures.push({
          facebookPhotoId: result.photo.facebookPhotoId,
          filename: result.photo.filename,
          sourceUrl: result.photo.sourceUrl,
          error: result.error,
        })
      }

      console.log(
        `[${String(completed).padStart(3, ' ')}/${photos.length}] ${result.status.padEnd(10)} ${result.photo.filename}`,
      )
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))
  await fs.writeFile(
    FAILURE_PATH,
    `${JSON.stringify(failures, null, 2)}\n`,
    'utf8',
  )

  console.log(
    JSON.stringify(
      {
        total: photos.length,
        downloaded,
        skipped,
        failed: failures.length,
        downloadedBytes: totalBytes,
      },
      null,
      2,
    ),
  )

  if (failures.length > 0) process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

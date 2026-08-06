const http = require('node:http')
const fs = require('node:fs/promises')
const path = require('node:path')

const HOST = '127.0.0.1'
const PORT = 43821
const ROOT = __dirname
const MAX_BODY_BYTES = 8 * 1024 * 1024

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`
}

function toCsv(photos) {
  const headers = [
    'index',
    'facebookPhotoId',
    'filename',
    'width',
    'height',
    'facebookPhotoUrl',
    'sourceUrl',
    'sourceAsset',
    'alt',
  ]

  return [
    headers.join(','),
    ...photos.map((photo) =>
      headers.map((header) => csvCell(photo[header])).join(','),
    ),
  ].join('\r\n')
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'GET' && request.url === '/health') {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.end(JSON.stringify({ ok: true }))
      return
    }

    if (request.method === 'POST' && request.url === '/manifest') {
      const chunks = []
      let size = 0

      for await (const chunk of request) {
        size += chunk.length
        if (size > MAX_BODY_BYTES) {
          response.writeHead(413)
          response.end('Manifest is too large')
          return
        }
        chunks.push(chunk)
      }

      const manifest = JSON.parse(Buffer.concat(chunks).toString('utf8'))
      if (!Array.isArray(manifest.photos) || manifest.photos.length === 0) {
        throw new Error('Manifest does not contain photos')
      }

      await Promise.all([
        fs.writeFile(
          path.join(ROOT, 'manifest.json'),
          `${JSON.stringify(manifest, null, 2)}\n`,
          'utf8',
        ),
        fs.writeFile(
          path.join(ROOT, 'manifest.csv'),
          `${toCsv(manifest.photos)}\r\n`,
          'utf8',
        ),
      ])

      response.writeHead(201, { 'content-type': 'application/json' })
      response.end(
        JSON.stringify({ saved: true, photos: manifest.photos.length }),
      )
      return
    }

    response.writeHead(404)
    response.end('Not found')
  } catch (error) {
    response.writeHead(500, { 'content-type': 'application/json' })
    response.end(JSON.stringify({ error: String(error) }))
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Facebook manifest receiver listening at http://${HOST}:${PORT}`)
})

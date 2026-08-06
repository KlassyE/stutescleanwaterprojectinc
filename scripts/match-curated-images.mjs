import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDirectory, '..')
const assetDirectory = path.join(root, 'src', 'assets')
const archiveDirectory = path.join(root, 'facebook-archive', 'images')

const portraitNames = new Set([
  'tony-stutes.jpg',
  'sandy-stutes.jpg',
  'katuura-johnson.jpg',
])
const curatedNames = (await readdir(assetDirectory))
  .filter((name) => /\.(jpe?g|png)$/i.test(name))
  .filter((name) => !portraitNames.has(name))
  .filter((name) => name !== 'stutes-official-logo.png')
const archiveNames = (await readdir(archiveDirectory)).filter((name) =>
  /\.(jpe?g|png)$/i.test(name),
)

async function fingerprint(filePath) {
  const { data, info } = await sharp(filePath, { failOn: 'none' })
    .rotate()
    .resize(40, 40, { fit: 'fill' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  return { data, channels: info.channels }
}

function distance(left, right) {
  const channels = Math.min(left.channels, right.channels, 3)
  let sum = 0
  let samples = 0
  for (let pixel = 0; pixel < 40 * 40; pixel += 1) {
    for (let channel = 0; channel < channels; channel += 1) {
      const leftValue = left.data[pixel * left.channels + channel]
      const rightValue = right.data[pixel * right.channels + channel]
      sum += Math.abs(leftValue - rightValue)
      samples += 1
    }
  }
  return sum / samples
}

const archiveFingerprints = []
for (const [index, name] of archiveNames.entries()) {
  archiveFingerprints.push({
    name,
    fingerprint: await fingerprint(path.join(archiveDirectory, name)),
  })
  if ((index + 1) % 50 === 0) {
    process.stdout.write(`\rFingerprinted ${index + 1}/${archiveNames.length}`)
  }
}
process.stdout.write('\n')

for (const name of curatedNames) {
  const target = await fingerprint(path.join(assetDirectory, name))
  const matches = archiveFingerprints
    .map((candidate) => ({
      name: candidate.name,
      distance: distance(target, candidate.fingerprint),
    }))
    .sort((left, right) => left.distance - right.distance)
    .slice(0, 3)

  console.log(`\n${name}`)
  for (const match of matches) {
    console.log(`  ${match.distance.toFixed(2).padStart(6)}  ${match.name}`)
  }
}

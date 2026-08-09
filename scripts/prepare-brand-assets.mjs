import sharp from 'sharp'

const logoInput = 'public/images/facebook/full/logo.webp'
const lightLogoOutput = 'src/assets/stutes-official-logo.png'
const justusInput = 'public/images/facebook/full/justus crop.webp'
const justusOutput = 'src/assets/kabunga-justus.webp'

const { data, info } = await sharp(logoInput)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixelCount = width * height
const background = new Uint8Array(pixelCount)
const queue = new Int32Array(pixelCount)
let head = 0
let tail = 0

function isNearWhite(pixel) {
  const offset = pixel * channels
  return (
    data[offset] >= 240 &&
    data[offset + 1] >= 240 &&
    data[offset + 2] >= 240
  )
}

function queueBackground(pixel) {
  if (background[pixel] !== 0) return
  if (!isNearWhite(pixel)) return

  background[pixel] = 1
  queue[tail] = pixel
  tail += 1
}

for (let x = 0; x < width; x += 1) {
  queueBackground(x)
  queueBackground((height - 1) * width + x)
}

for (let y = 1; y < height - 1; y += 1) {
  queueBackground(y * width)
  queueBackground(y * width + width - 1)
}

while (head < tail) {
  const pixel = queue[head]
  head += 1
  const x = pixel % width
  const y = Math.floor(pixel / width)

  if (x > 0) queueBackground(pixel - 1)
  if (x < width - 1) queueBackground(pixel + 1)
  if (y > 0) queueBackground(pixel - width)
  if (y < height - 1) queueBackground(pixel + width)
}

let minX = width
let minY = height
let maxX = 0
let maxY = 0

for (let pixel = 0; pixel < pixelCount; pixel += 1) {
  const offset = pixel * channels
  if (background[pixel] !== 0) data[offset + 3] = 0
  if (data[offset + 3] === 0) continue

  const x = pixel % width
  const y = Math.floor(pixel / width)
  minX = Math.min(minX, x)
  minY = Math.min(minY, y)
  maxX = Math.max(maxX, x)
  maxY = Math.max(maxY, y)
}

const padding = 12
const left = Math.max(0, minX - padding)
const top = Math.max(0, minY - padding)
const cropWidth = Math.min(width - left, maxX - minX + 1 + padding * 2)
const cropHeight = Math.min(height - top, maxY - minY + 1 + padding * 2)
const crop = { left, top, width: cropWidth, height: cropHeight }

await sharp(data, { raw: { width, height, channels } })
  .extract(crop)
  .png()
  .toFile(lightLogoOutput)

await sharp(justusInput)
  .extract({ left: 12, top: 48, width: 324, height: 420 })
  .resize(648, 840)
  .webp({ quality: 92 })
  .toFile(justusOutput)

console.log('Prepared transparent official logos and Kabunga Justus portrait.')

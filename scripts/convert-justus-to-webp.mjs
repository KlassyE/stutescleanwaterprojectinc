import sharp from 'sharp'
import fs from 'fs'

const input = 'public/images/facebook/full/justus.jpeg'
const output = 'public/images/facebook/full/justus.webp'

if (!fs.existsSync(input)) {
  console.error(`Input not found: ${input}`)
  process.exit(2)
}

await sharp(input)
  .webp({ quality: 92, effort: 4 })
  .toFile(output)

console.log(`Converted ${input} → ${output}`)

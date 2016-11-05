import { randomBytes } from 'crypto'

const base = `screencapture`
const currentDate = () => `-${Date.now()}`
const randomHex = () => `-${randomBytes(2).toString(`hex`)}`
const parseExtension = ext => `.${ext.toString().split(`.`).join(``)}`

export default function generateFilename (ext) {
  if (!ext) throw new Error(`expected a string with a file extension`)
  if (typeof (ext) !== `string` && typeof (ext) !== `number`) {
    throw new TypeError(`expected extension to be of type string or number`)
  }

  return base
    .concat(currentDate())
    .concat(randomHex())
    .concat(parseExtension(ext))
}

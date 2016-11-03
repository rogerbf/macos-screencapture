import { tmpdir } from 'os'
import { join } from 'path'
import options from './options'
import parseOptions from './parseOptions'
import generateFilename from './generateFilename'

export default function parseConfiguration (configuration = {
  path: join(tmpdir(), generateFilename(`png`)),
  options: [ options.noSound, options.format() ]
}) {
  return parseOptions(configuration.options).concat(configuration.path)
}

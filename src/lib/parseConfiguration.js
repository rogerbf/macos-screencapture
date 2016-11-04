import { tmpdir } from 'os'
import { join } from 'path'
import options from './options'
import parseOptions from './parseOptions'
import generateFilename from './generateFilename'

export default function parseConfiguration (userConfiguration) {
  const configuration = Object.assign(
    {
      path: join(tmpdir(), generateFilename(`png`)),
      options: [ options.noSound, options.format() ]
    },
    userConfiguration
  )
  return parseOptions(configuration.options).concat(configuration.path)
}

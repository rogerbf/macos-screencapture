import { spawn } from 'child_process'
import parseConfiguration from './parseConfiguration'

export default function screencapture (userConfiguration) {
  const configuration = parseConfiguration(userConfiguration)
  return new Promise((resolve, reject) => {
    const instance = spawn(`screencapture`, configuration)

    instance.on(`error`, err => reject(err.toString()))
    instance.stderr.on(`data`, err => reject(err.toString()))

    instance.on(`close`, code => {
      (code === 0)
      ? resolve(configuration[configuration.length - 1])
      : reject(`process exited code: ${code}`)
    })
  })
}

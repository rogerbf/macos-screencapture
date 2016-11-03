import { spawn } from 'child_process'
import parseConfiguration from './parseConfiguration'

export default function screencapture (configuration) {
  return new Promise((resolve, reject) => {
    const instance = spawn(`screencapture`, parseConfiguration(configuration))

    instance.on(`error`, err => reject(err.toString()))
    instance.stderr.on(`data`, err => reject(err.toString()))

    instance.on(`close`, code => {
      (code === 0)
      ? resolve(configuration.path)
      : reject(`process exited code: ${code}`)
    })
  })
}

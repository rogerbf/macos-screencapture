import { spawn } from 'child_process'

export default function screencapture (config) {
  return new Promise((resolve, reject) => {
    const instance = spawn(`screencapture`)

    instance.on(`error`, err => reject(err))
    instance.stderr.on(`data`, data => reject(data))

    instance.on(`close`, code => {
      if (code !== 0) reject(`process exited with a code of: ${code}`)
      else resolve(config.path)
    })
  })
}

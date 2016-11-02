import test from 'tape'
import generateFilename from '../lib/generateFilename'

test(`generateFilename`, assert => {
  assert.throws(() => generateFilename(), `called with no argument`)
  assert.throws(() => generateFilename(``), `called with: empty string`)
  assert.throws(() => generateFilename([]), `called with: array`)
  assert.throws(() => generateFilename({}), `called with: object`)

  assert.doesNotThrow(() => generateFilename(`png`), `called with: non empty string`)
  assert.doesNotThrow(() => generateFilename(10), `called with: number`)

  assert.ok(generateFilename(`png`).match(/^screencapture-\d*(?=-)-.{4}\.png/))
  assert.end()
})

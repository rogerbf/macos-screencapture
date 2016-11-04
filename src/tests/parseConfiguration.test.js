import test from 'tape'
import parseConfiguration from '../lib/parseConfiguration'

test(`parseConfiguration`, assert => {
  assert.ok(typeof (parseConfiguration) === `function`, `is a function`)
  assert.end()
})

test(`parseConfiguration()`, assert => {
  const actual = parseConfiguration()
  assert.ok(actual.length === 4)
  assert.ok(actual.includes(`-x`))
  assert.ok(actual.includes(`-t`))
  assert.ok(actual.includes(`png`))
  assert.ok(/screencapture/.test(actual[actual.length - 1]))
  assert.end()
})

test(`parseConfiguration({ path })`, assert => {
  const actual = parseConfiguration({ path: `/some/path/to/file.png` })
  const expected = [`-x`, `-t`, `png`, `/some/path/to/file.png`]
  assert.deepEqual(actual, expected)
  assert.end()
})

test(`parseConfiguration({ options })`, assert => {
  const actual = parseConfiguration({ options: [`-o`] })
  assert.ok(actual.length === 2)
  assert.ok(actual[0] === `-o`)
  assert.ok(/screencapture/.test(actual[1]))
  assert.end()
})

test(`parseConfiguration({ path, options })`, assert => {
  const configuration = {
    path: `/some/path/to/file.png`,
    options: [`-o`, `-m`]
  }
  const actual = parseConfiguration(configuration)
  const expected = [`-o`, `-m`, `/some/path/to/file.png`]
  assert.deepEqual(actual, expected)
  assert.end()
})

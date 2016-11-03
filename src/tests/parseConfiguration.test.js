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

// test(`parseConfiguration({ path })`)
//
// test(`parseConfiguration({ options })`)
//
// test(`parseConfiguration({ path, options })`)

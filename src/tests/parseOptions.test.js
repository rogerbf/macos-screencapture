import test from 'tape'
import parseOptions from '../lib/parseOptions'

test(`parseOptions`, assert => {
  assert.ok(typeof (parseOptions) === `function`, `is a function`)
  assert.deepEqual(parseOptions([[`-x`]]), [`-x`])
  assert.deepEqual(parseOptions([[`-o`], [`-t`, `png`]]), [`-o`, `-t`, `png`])

  assert.throws(() => parseOptions({}), `called with: object`)
  assert.throws(() => parseOptions(1), `called with: number`)
  assert.throws(() => parseOptions(`test`), `called with: string`)
  assert.end()
})

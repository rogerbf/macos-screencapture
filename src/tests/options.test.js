import test from 'tape'
import options from '../lib/options'

test(`there are 16 options`, assert => {
  assert.equal(Object.keys(options).length, 16)
  assert.end()
})

test(`options.format`, assert => {
  const defaultFormat = [`-t`, `png`]
  assert.deepEqual(options.format.default, defaultFormat)
  assert.deepEqual(options.format(), defaultFormat)
  assert.deepEqual(options.format(`custom`), [`-t`, `custom`])
  assert.deepEqual(options.format.pdf, [`-t`, `pdf`])
  assert.deepEqual(options.format.jpg, [`-t`, `jpg`])
  assert.deepEqual(options.format.tiff, [`-t`, `tiff`])

  assert.throws(() => options.format(Number()), `format() called with number`)
  assert.throws(() => options.format([]), `format() called with: array`)
  assert.throws(() => options.format({}), `format() called with: object`)
  assert.end()
})

test(`options.delay`, assert => {
  const defaultDelay = [`-T`, 5]
  assert.deepEqual(options.delay.default, defaultDelay)
  assert.deepEqual(options.delay(), defaultDelay)
  assert.deepEqual(options.delay(10), [`-T`, 10])
  assert.deepEqual(options.delay(`10`), [`-T`, 10])

  assert.throws(() => options.delay(``), `delay() called with: empty string`)
  assert.throws(() => options.delay(`test`), `delay() called with: erroneous string`)
  assert.throws(() => options.delay([]), `delay() called with: array`)
  assert.throws(() => options.delay({}), `delay() called with: object`)
  assert.throws(() => options.delay(-1), `delay() called with: negative number`)
  assert.end()
})

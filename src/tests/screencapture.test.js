import test from 'tape'
import screencapture from '../lib/screencapture'
// import { tmpdir } from 'os'
// import { parse } from 'path'
// import { access, constants } from 'fs'
//
// test(`screencapture`, assert => {
//   const date = Date.now()
//   const configuration = {
//     path: `${tmpdir()}/screencap-${date}.png`,
//     options: [`-x`]
//   }
//   const expected = `screencap-${date}.png`
//   screencapture(configuration).then(file => {
//     assert.equal(parse(file).base, expected)
//     access(file, constants.F_OK, err => {
//       assert.false(err)
//     })
//   })
//   assert.end()
// })
//
// test(`screencapture`, assert => {
//   const date = Date.now()
//   const configuration = {
//     path: [`${tmpdir()}/screencap-${date}.png`],
//     options: [`-x`]
//   }
//   const expected = `screencap-${date}.png`
//   screencapture(configuration).then(file => {
//     assert.equal(parse(file).base, expected)
//     access(file, constants.F_OK, err => {
//       assert.false(err)
//     })
//   })
//   assert.end()
// })

test(`screencapture`, assert => {
  assert.ok(typeof (screencapture) === `function`)
  assert.end()
})

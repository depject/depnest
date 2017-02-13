const test = require('tape')

const depnest = require('../')

test('depnest', function (t) {
  t.ok(depnest, 'module is require-able')
  t.end()
})

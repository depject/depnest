const { isArray } = Array
const { set, each } = require('libnested')

module.exports = depnest

function depnest (...args) {
  if (typeof args[0] === 'string') return nestOne(...args)
  else if (typeof args[0] === 'object') return nestObject(...args)
  throw new Error(`depnest: incorrect arguments! got: ${JSON.stringify(args)}`)
}

function nestOne (path, value = true) {
  var out = {}
  set(out, Path(path), value)
  return out
}

function nestObject (object) {
  var out = {}
  each(object, (value, path) => {
    if (isArray(value)) {
      value = arrayToObject(value)
    }
    set(out, Path(path), value)
  })
  return out
}

function Path (stringOrArray) {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('.')
  } else if (isArray(stringOrArray)) {
    return stringOrArray.reduce((sofar, next) => {
      return [...sofar, ...Path(next)]
    }, [])
  }
  throw new Error(`depnest: path must be either string or array, got: ${JSON.stringify(stringOrArray)}`)
}

function arrayToObject (array) {
  var out = {}
  array.forEach(path => {
    set(out, Path(path), true)
  })
  return out
}

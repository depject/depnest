const test = require('tape')

const nest = require('../')

test('depnest', t => {
  t.ok(nest, 'module is require-able')
  t.end()
})

test('nest(string)', t => {
  const args = ['cats.actions.save']
  const expected = { cats: { actions: { save: true } } }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(array)', t => {
  const args = [[
    'cats.actions.create'
  ]]
  const expected = {
    cats: {
      actions: {
        create: true
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, string)', t => {
  const args = ['cats.actions.set', 'first']
  const expected = { cats: { actions: { set: 'first' } } }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, function)', t => {
  const fn = () => {}
  const args = ['cats.actions.set', fn]
  const expected = { cats: { actions: { set: fn } } }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, array)', t => {
  const args = ['cats.actions', [
    'create',
    'save'
  ]]
  const expected = {
    cats: {
      actions: {
        create: true,
        save: true
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, object)', t => {
  const create = () => {}
  const save = () => {}
  const args = ['cats.actions', {
    create,
    save
  }]
  const expected = {
    cats: {
      actions: {
        create,
        save
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(object) with array', t => {
  const args = [{
    'cats.actions': [
      'create',
      'save'
    ]
  }]
  const expected = {
    cats: {
      actions: {
        create: true,
        save: true
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(object) with strings', t => {
  const args = [{
    'cats.actions': {
      create: 'first',
      save: 'first'
    }
  }]
  const expected = {
    cats: {
      actions: {
        create: 'first',
        save: 'first'
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(object) with functions', t => {
  const create = () => {}
  const save = () => {}
  const args = [{
    'cats.actions': {
      create,
      save
    }
  }]
  const expected = {
    cats: {
      actions: {
        create,
        save
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, nestedArray)', t => {
  const args = ['cats', [
    'actions.load',
    'elements.show'
  ]]
  const expected = {
    cats: {
      actions: {
        load: true
      },
      elements: {
        show: true
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nest(string, nestedObject)', t => {
  const args = ['cats', {
    'actions.load': 'first',
    'elements.show': 'first'
  }]
  const expected = {
    cats: {
      actions: {
        load: 'first'
      },
      elements: {
        show: 'first'
      }
    }
  }
  const actual = nest(...args)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})


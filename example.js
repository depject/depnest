const { inspect } = require('util')
const nest = require('./')

const onePlug = {
  gives: nest('cats.actions.save'),
  needs: nest('cats.actions.set', 'first'),
  create: (api) => nest('cats.actions.save', () => {})
}

console.log('onePlug', str(onePlug))
console.log('-> ', str(onePlug.create()))

const objectPlugs = {
  gives: nest({
    'cats.actions': [
      'create',
      'save'
    ]
  }),
  create: (api) => nest({
    'cats.actions': {
      create: () => {},
      save: () => {}
    }
  })
}

console.log('objectPlugs', str(objectPlugs))
console.log('-> ', str(objectPlugs.create()))

function str (obj) {
  return inspect(obj, { depth: null })
}

# depnest

helper function to create nested objects, best used with [depject](https://github.com/dominictarr/depject)

```shell
npm install --save depnest
```

for those of us who like to use [electric can openers](https://github.com/dominictarr/depject/issues/19#issuecomment-279216372) to open cans of nested worms.

## usage

### `depnest = require('depnest')`

### one plug

```js
modules.exports = {
  gives: nest('cats.actions.save'),
  needs: nest('cats.actions.set', 'first'),
  create: (api) => {
    return nest('cats.actions.save', save)

    function save () {
      ... // api.cats.actions.set()
    }
  }
}
```

### many plugs

```js
module.exports = {
  gives: nest({
    'cats.actions': [
      'create',
      'save'
    ]
  }),
  create: (api) => {
    return nest({
      'cats.actions': {
        create,
        save
      }
    })

    function create () {}
    function save () {}
  }
}
```

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

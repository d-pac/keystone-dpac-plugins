#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Finds and prepares d-pac plugins for use in KeystoneJS

## Installation

```sh
npm install --save keystone-dpac-plugins
```

## Usage

```js
// before `keystone.import( "models" );`
// (1) setup
var plugins = require("keystone-dpac-plugins");
plugins.register();

// in your models
// (2) plugin selection
var plugins = require("keystone-dpac-plugins");

MyModel.add({
    someField : {
        type    : Types.Select,
        options : plugins.list( "judge" )
    }
});
```

1. This will parse your project's `package.json` and iterate over the dependencies, if it encounters a [d-pac plugin module](https://github.com/d-pac/d-pac.docs/blob/master/analysis/plugin%20specification.md) it will read out the relevant data and store it.
1. It returns a list with usable plugins (of type "judge" in the above example), readily consumable by a keystone `Select` field.

**Note:** The plugin modules have NOT been required at this point and do not take up memory. The actual `require`'ing is left up to you.

## Example

See [comparative-selection plugin][comparative-selection-url] for an example of a keystone/d-pac plugin.

## License

GPL v3 © [d-pac](http://www.d-pac.be)


[npm-url]: https://npmjs.org/package/keystone-dpac-plugins
[npm-image]: https://badge.fury.io/js/keystone-dpac-plugins.svg
[travis-url]: https://travis-ci.org/d-pac/keystone-dpac-plugins
[travis-image]: https://travis-ci.org/d-pac/keystone-dpac-plugins.svg?branch=master
[daviddm-url]: https://david-dm.org/d-pac/keystone-dpac-plugins.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/d-pac/keystone-dpac-plugins
[comparative-selection-url]: https://github.com/d-pac/comparative-selection

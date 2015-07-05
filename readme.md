# hello [![Build Status](https://travis-ci.org/alonalon/hello.svg?branch=master)](https://travis-ci.org/alonalon/hello)

> My spectacular module


## Install

```
$ npm install --save hello
```


## Usage

```js
var hello = require('hello');

hello('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global hello
```
```
$ hello --help

  Usage
    hello [input]

  Example
    hello
    unicorns & rainbows

    hello ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### hello(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [alonalon](http://github.com/alon)

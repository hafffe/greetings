# Greetings! [![Build Status](https://travis-ci.org/alonalon/hello.svg?branch=master)](https://travis-ci.org/alonalon/hello)

> Get a random greeting


## Install

```
$ npm install --save greetings
```


## Usage

```js
var greetings = require('greetings');

console.log(greetings.random);
// 'Good day'

console.log(greetings)
// ['Hey', 'Hello', 'Hi', 'Howdy', 'Bonjour', 'Good day', ...]
```


## CLI

```
$ npm install --global greetings
```

```
$ greetings --help

  Usage
    $ greetings [input]

  Example
    $ greetings
    Hello

    $ greetings --all
    Hello
    Howdy

  Options
    --all  Get all greetings instead of a random
```


## License

MIT © [alonalon](http://github.com/alonalon)

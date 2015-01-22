# time-delta

[![Build Status](https://secure.travis-ci.org/johnotander/time-delta.png?branch=master)](https://travis-ci.org/johnotander/time-delta)

_Currently under development._

Get a time in the past or future based off the current time.

## Installation

```bash
npm install --save time-delta
```

## Usage

Proposed API:

```javascript
var td = require('time-delta');

// Time for three days and four minutes from now:
td('3').days.and('4').minutes.fromNow();

// Time for size weeks, one day, and 68 seconds ago:
td('6').weeks.and('1').day.and('68').seconds.ago();
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).

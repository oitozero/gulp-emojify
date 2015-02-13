# gulp-emojify
[![Build Status](https://travis-ci.org/oitozero/gulp-emojify.svg?branch=master)](https://travis-ci.org/oitozero/gulp-emojify)

> Add emoji/s to your message/s.

## Install

```
$ npm install --save-dev gulp-emojify
```


## Usage

```js
var gulp = require('gulp');
var emojify = require('gulp-emojify');

gulp.task('default', function () {

	gulp.src('index.js', {
		base: './'
	})
	.pipe(emojify('All good. Go drink a :beer:'));
});
```
![emojify](/assets/images/message.png)


```js
var gulp = require('gulp');
var emojify = require('gulp-emojify');

gulp.task('default', function () {

	gulp.src('index.js', {
		base: './'
	})
	.pipe(plumber({
		errorHandler: emojify.onError('Error: Grab some :coffee: and fix it!')
	}))
	.pipe(emojify(null))
	.pipe(emojify('All good. Go drink a cup of :beer:'));
});

```

![emojify](/assets/images/error.png)


## API

### emojify(options)

#### options

None.


## License

MIT © [Pedro Sampaio](https://github.com/oitozero)

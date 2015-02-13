'use strict';

var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var emojify = require('./');

var streamFile = function (filename, stream) {
	var testFile = fs.readFileSync(filename);
	stream.write(new gutil.File({
		path: filename,
		contents: new Buffer(testFile.toString())
	}));

	stream.end();
};

describe('gulp-emojify', function () {
	it('should emit data', function (cb) {
		var stream = emojify('emojify');

		stream.on('data', function (data) {
			assert.deepEqual(data, 'emojify');
		}).on('end', function (out) {
			cb();
		});

		streamFile('./index.js', stream);
	});

	it('should emit error', function (cb) {
		var stream = emojify({});

		stream.on('data', function (data) {
			assert.equal(1, 2);
		}).on('error', function (error) {
			assert.equal(1, 1);
		}).on('end', function (out) {
			cb();
		});

		streamFile('./index.js', stream);
	});

});

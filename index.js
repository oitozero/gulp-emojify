'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var emojify = require('./lib/emojify');

module.exports = function (message) {

	return through.obj(function (file, enc, cb) {
		var self = this;

		if (typeof message == 'string' || message instanceof String){
			emojify(message);
			self.emit && self.emit('data', message);
		} else {
			self.emit('error', {});
		}

		cb();
	});
};

// Expose onError behaviour
module.exports.onError = function (options, callback) {

	return function (error) {
		var self = this;
		emojify(options);
		self.emit && self.emit('end');
	};
};

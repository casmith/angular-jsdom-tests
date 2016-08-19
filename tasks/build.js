'use strict';

var browserify = require('browserify'),
	fs = require('fs');

var browserifyOpts = {
	debug: true
};

var b = browserify();
b.add('./src/main.js');
b.bundle().pipe(fs.createWriteStream('./src/bundle.js'));
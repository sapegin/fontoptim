module.exports = function() {
	'use strict';

	var fs = require('fs');
	var fontoptim = require('../../index');

	var fonts = {
		'PTSerif-Bold.woff': fs.readFileSync('test/fonts/PTSerif-Bold.woff'),
		'PTSerif-Bold.woff2': fs.readFileSync('test/fonts/PTSerif-Bold.woff2'),
		'PTSerif-Italic.woff': fs.readFileSync('test/fonts/PTSerif-Italic.woff'),
		'PTSerif-Italic.woff2': fs.readFileSync('test/fonts/PTSerif-Italic.woff2'),
		'PTSerif-Regular.woff': fs.readFileSync('test/fonts/PTSerif-Regular.woff'),
		'PTSerif-Regular.woff2': fs.readFileSync('test/fonts/PTSerif-Regular.woff2')
	};

	var css = fontoptim(fonts, {fontFamily: 'PT Serif'});

	fs.writeFileSync('test/tmp/ptserif.woff.css', css.woff);
	fs.writeFileSync('test/tmp/ptserif.woff2.css', css.woff2);
};

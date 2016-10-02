# fontoptim

[![Build Status](https://travis-ci.org/sapegin/fontoptim.png)](https://travis-ci.org/sapegin/fontoptim)

Generates CSS with WOFF(2) fonts embedded as Base64. Use these CSS to load webfonts asynchronously, avoid invisible text and reduce flickering.

Based on ideas from Adam Beres-Deak’s article [Better webfont loading with using localStorage and providing WOFF2 support](http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html).

## Installation

```
npm install --save fontoptim
```


## Example

You need WOFF and WOFF2 font files to use fontoptim (you can make them with Font Squirrel’s [webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)):

```js
var fs = require('fs');
var fontoptim = require('fontoptim');
var fonts = {
	'PTSerif-Bold.woff': fs.readFileSync('fonts/PTSerif-Bold.woff'),
	'PTSerif-Bold.woff2': fs.readFileSync('fonts/PTSerif-Bold.woff2'),
	'PTSerif-Italic.woff': fs.readFileSync('fonts/PTSerif-Italic.woff'),
	// ...
};
var css = fontoptim(fonts, {fontFamily: 'PT Serif'});
// css.woff = '@font-face{font-family:"PT Serif";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAU...'
// css.woff2 = '@font-face{font-family:"PT Serif";src:url(data:font/woff2;charset=utf-8;base64,d09GMgABAAAAA...'
fs.writeFileSync('build/ptserif.woff.css', css.woff);
fs.writeFileSync('build/ptserif.woff2.css', css.woff2);
```

Then load these CSS files with [`loadFont`](demo/js/fontloader.js) function.

```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<!-- This script must be placed in the HEAD above all external stylesheet declarations (link[rel=stylesheet]) -->
	<script>function loadFont(fontName, fontUrlBase) { /* Inline loadFont function here */ }
	loadFont('PT Serif','/build/ptserif')</script>
	<link rel="stylesheet" href="/build/styles.css">
</head>
...
```

See `demo` folder for details.


## Build systems

### Grunt

* [grunt-fontoptim](https://github.com/sapegin/grunt-fontoptim)


## Resources

* [Better webfont loading with using localStorage and providing WOFF2 support](http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html)
* [Font Squirrel’s webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)


## Changelog

The changelog can be found in the [Changelog.md](Changelog.md) file.

## Author

* [Artem Sapegin](http://sapegin.me/)

---

## License

The MIT License, see the included [License.md](License.md) file.

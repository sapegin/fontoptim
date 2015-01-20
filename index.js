/**
 * Generates CSS with WOFF(2) fonts embedded as Base64.
 *
 * @author Artem Sapegin (http://sapegin.me)
 */

'use strict';

var FontOptim = require('./lib/fontoptim');

module.exports = function(fonts, options) {
	return (new FontOptim(fonts, options)).generate();
};

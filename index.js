/*!
 * dirname-regex <https://github.com/jonschlinkert/dirname-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function dirnameRegex() {
  return /^(.*[\\\/])([^\\\/]*)$/;
};

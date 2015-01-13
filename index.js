/*!
 * dirname-regex <https://github.com/regexps/dirname-regex>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert
 * Licensed under the MIT License.
 */

module.exports = function dirnameRegex() {
  return /^((.*)[\\\/]|\.)[^\\\/]*$/;
};

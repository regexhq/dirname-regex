/*!
 * dirname-regex <https://github.com/regexps/dirname-regex>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var dirname = require('./');

function match(str) {
  return str.match(dirname());
}

it('should match a directory with a file name:', function () {
  assert.equal(match('a/b/c/d.md')[0], 'a/b/c/d.md');
  assert.equal(match('a/b/c/d.md')[1], 'a/b/c/');
  assert.equal(match('a/b/c/d.md')[2], 'a/b/c');
  assert.equal(match('a\\b\\c\\d.md')[0], 'a\\b\\c\\d.md');
  assert.equal(match('a\\b\\c\\d.md')[1], 'a\\b\\c\\');
  assert.equal(match('a\\b\\c\\d.md')[2], 'a\\b\\c');
});

it('should match a directory without a file name:', function () {
  assert.equal(match('a/b/c')[0], 'a/b/c');
  assert.equal(match('a/b/c')[1], 'a/b/');
  assert.equal(match('a/b/c')[2], 'a/b');
  assert.equal(match('a\\b\\c')[0], 'a\\b\\c');
  assert.equal(match('a\\b\\c')[1], 'a\\b\\');
  assert.equal(match('a\\b\\c')[2], 'a\\b');
});

it('should match a dots and slashes:', function () {
  assert.equal(match('.')[0], '.');
  assert.equal(match('.')[1], '.');
  assert.equal(match('.')[2], null);
  assert.equal(match('/')[0], '/');
  assert.equal(match('/')[1], '/');
  assert.equal(match('/')[2], '');
  assert.equal(match('./')[0], './');
  assert.equal(match('./')[1], './');
  assert.equal(match('./')[2], '.');
  assert.equal(match('//////')[0], '//////');
  assert.equal(match('//////')[1], '//////');
  assert.equal(match('//////')[2], '/////');
  assert.equal(match('\\')[0], '\\');
  assert.equal(match('\\')[1], '\\');
  assert.equal(match('\\')[2], '');
  assert.equal(match('.\\')[0], '.\\');
  assert.equal(match('.\\')[1], '.\\');
  assert.equal(match('.\\')[2], '.');
});

it('should return `null` if no directory:', function () {
  assert.equal(match(''), null);
  assert.equal(match('d.md'), null);
});

it('should match a directory ending with a slash:', function () {
  assert.equal(match('a/b/c/')[0], 'a/b/c/');
  assert.equal(match('a/b/c/')[1], 'a/b/c/');
  assert.equal(match('a/b/c/')[2], 'a/b/c');
  assert.equal(match('a\\b\\c\\')[0], 'a\\b\\c\\');
  assert.equal(match('a\\b\\c\\')[1], 'a\\b\\c\\');
  assert.equal(match('a\\b\\c\\')[2], 'a\\b\\c');
});

it('should match a directory starting with a slash:', function () {
  assert.equal(match('/a/b/c/d.js')[0], '/a/b/c/d.js');
  assert.equal(match('/a/b/c/d.js')[1], '/a/b/c/');
  assert.equal(match('/a/b/c/d.js')[2], '/a/b/c');
  assert.equal(match('\\a\\b\\c\\d.js')[0], '\\a\\b\\c\\d.js');
  assert.equal(match('\\a\\b\\c\\d.js')[1], '\\a\\b\\c\\');
  assert.equal(match('\\a\\b\\c\\d.js')[2], '\\a\\b\\c');
});

it('should match a directory starting with a dot:', function () {
  assert.equal(match('./a/b/c/d.js')[0], './a/b/c/d.js');
  assert.equal(match('./a/b/c/d.js')[1], './a/b/c/');
  assert.equal(match('./a/b/c/d.js')[2], './a/b/c');
  assert.equal(match('.\\a\\b\\c\\d.js')[0], '.\\a\\b\\c\\d.js');
  assert.equal(match('.\\a\\b\\c\\d.js')[1], '.\\a\\b\\c\\');
  assert.equal(match('.\\a\\b\\c\\d.js')[2], '.\\a\\b\\c');
});

it('should match a directory with dots in a non-filename segment:', function () {
  assert.equal(match('./a/b/c/d.e.f/g.js')[0], './a/b/c/d.e.f/g.js');
  assert.equal(match('./a/b/c/d.e.f/g.js')[1], './a/b/c/d.e.f/');
  assert.equal(match('./a/b/c/d.e.f/g.js')[2], './a/b/c/d.e.f');
  assert.equal(match('.\\a\\b\\c\\d.e.f\\g.js')[0], '.\\a\\b\\c\\d.e.f\\g.js');
  assert.equal(match('.\\a\\b\\c\\d.e.f\\g.js')[1], '.\\a\\b\\c\\d.e.f\\');
  assert.equal(match('.\\a\\b\\c\\d.e.f\\g.js')[2], '.\\a\\b\\c\\d.e.f');
});

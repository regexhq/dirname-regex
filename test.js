/*!
 * dirname-regex <https://github.com/jonschlinkert/dirname-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var dirname = require('./');

describe('dirname regex', function () {
  it('should match the directory with a file name:', function () {
    var path = dirname().exec('a/b/c/d.md');
    assert.equal(path[0], 'a/b/c/d.md');
    assert.equal(path[1], 'a/b/c/');
  });
  it('should match the directory ending with a slash:', function () {
    var path = dirname().exec('a/b/c/');
    assert.equal(path[0], 'a/b/c/');
    assert.equal(path[1], 'a/b/c/');
  });

  it('should match the directory without a file name:', function () {
    var path = dirname().exec('a/b/c');
    assert.equal(path[0], 'a/b/c');
    assert.equal(path[1], 'a/b/');
  });
});

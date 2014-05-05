var build = require('../../src/javascripts/build');

describe('build', function () {
  'use strict';

  it('has module name', function () {
    expect(build.name).toBe('module');
  });
});

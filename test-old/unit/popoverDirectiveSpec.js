var directive = require('../../src/javascripts/popoverDirective');

describe('popoverDirective', function () {
  'use strict';

  var scope, attrs, element, directiveInstance;

  beforeEach(function () {
    scope = {};
    attrs = {};
    element = jasmine.createSpy('element');

    directiveInstance = directive();
  });

  describe('link', function () {
    it('sets popover element on scope', function () {
      directiveInstance.link(scope, element, attrs);

      expect(scope.popoverElement).toBe(element);
    });
  });
});

var directive = require('../../src/javascripts/popoverDirective');

describe('popoverDirective', function () {
  'use strict';

  describe('link', function () {
    it('register popover', function () {
      var scope, attrs, registry, directiveInstance;

      scope = {};
      attrs = { popoverId: 'popover-id' };
      registry = {};
      registry.register = jasmine.createSpy('register');

      directiveInstance = directive(registry);
      directiveInstance.link(scope, undefined, attrs);

      expect(registry.register).toHaveBeenCalledWith('popover-id', scope);
    });
  });
});

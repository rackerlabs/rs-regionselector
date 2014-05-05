var directive = require('../../src/javascripts/popoverDirective');

describe('popoverDirective', function () {
  'use strict';

  it('register popover when directive is linked', function () {
    var scope, attrs, registry, directiveInstance;

    scope = {};
    attrs = { id: 'popover-id' };
    registry = {};
    registry.register = jasmine.createSpy('register');

    directiveInstance = directive(registry);
    directiveInstance.link(scope, undefined, attrs);

    expect(registry.register).toHaveBeenCalledWith('popover-id', scope);
  });
});

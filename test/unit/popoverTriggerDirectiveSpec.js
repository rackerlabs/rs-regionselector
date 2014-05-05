var directive = require('../../src/javascripts/popoverTriggerDirective');

describe('popoverTriggerDirective', function () {
  'use strict';

  var popover, registry, directiveInstance;

  beforeEach(function () {
    popover = {};
    popover.show = jasmine.createSpy('show');

    registry = {};
    registry.popover = jasmine.createSpy('popover').andReturn(popover);

    directiveInstance = directive(registry);
  });

  describe('link', function () {
    it('opens popover when element is clicked', function () {
      var scope, element, attrs;

      scope = {};
      scope.$apply = function () {};
      element = angular.element('<div></div>');
      attrs = { popoverId: 'popover-id' };

      directiveInstance.link(scope, element, attrs);
      element.triggerHandler('click');

      expect(popover.show).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('popover-id');
    });

    it('does not open popover before element is clicked', function () {
      var scope, element, attrs;

      scope = {};
      element = angular.element('<div></div>');
      attrs = { popoverId: 'popover-id' };

      directiveInstance.link(scope, element, attrs);

      expect(popover.show).not.toHaveBeenCalled();
      expect(registry.popover).not.toHaveBeenCalledWith('popover-id');
    });
  });
});

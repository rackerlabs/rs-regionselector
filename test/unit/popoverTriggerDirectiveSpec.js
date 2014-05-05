var directive = require('../../src/javascripts/popoverTriggerDirective');

describe('popoverTriggerDirective', function () {
  'use strict';

  var popover, registry, directiveInstance, scope, element, attrs;

  beforeEach(function () {
    popover = {};
    popover.toggle = jasmine.createSpy('toggle');

    registry = {};
    registry.popover = jasmine.createSpy('popover').andReturn(popover);

    directiveInstance = directive(registry);

    scope = {};
    scope.$apply = function () {};
    element = angular.element('<div></div>');
    attrs = { popoverId: 'popover-id' };
  });

  describe('link', function () {
    it('opens popover when element receives default event', function () {
      directiveInstance.link(scope, element, attrs);
      element.triggerHandler('click');

      expect(popover.toggle).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('popover-id');
    });

    it('opens popover when element receives configured event', function () {
      attrs.popoverEvent = 'my-custom-event';

      directiveInstance.link(scope, element, attrs);
      element.triggerHandler('my-custom-event');

      expect(popover.toggle).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('popover-id');
    });

    it('does not open popover before element is clicked', function () {
      directiveInstance.link(scope, element, attrs);

      expect(popover.toggle).not.toHaveBeenCalled();
      expect(registry.popover).not.toHaveBeenCalledWith('popover-id');
    });
  });
});

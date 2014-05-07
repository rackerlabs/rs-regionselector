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
    it('toggles popover when element receives click event', function () {
      directiveInstance.link(scope, element, attrs);
      element.triggerHandler('click');

      expect(popover.toggle).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('popover-id');
    });

    it('toggles linked popover when element is inside popover directive', function () {
      var controller;

      attrs.popoverId = null;
      controller = {};
      controller.popoverId = function () {
        return 'automatic-link';
      };

      directiveInstance.link(scope, element, attrs, controller);
      element.triggerHandler('click');

      expect(popover.toggle).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('automatic-link');
    });

    it('does not toggles popover before element is clicked', function () {
      directiveInstance.link(scope, element, attrs);

      expect(popover.toggle).not.toHaveBeenCalled();
      expect(registry.popover).not.toHaveBeenCalledWith('popover-id');
    });
  });
});

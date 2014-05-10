var directive = require('../../src/javascripts/popoverDirective');

describe('popoverDirective', function () {
  'use strict';

  var scope, attrs, element, target, registry, tether, directiveInstance;

  beforeEach(function () {
    scope = { $apply: jasmine.createSpy('apply') };
    attrs = { popoverId: 'popover-id' };
    element = jasmine.createSpy('element');
    target = jasmine.createSpy('target');

    registry = {};
    registry.register = jasmine.createSpy('register');

    tether = {};
    tether.attach = jasmine.createSpy('attach');
    tether.detach = jasmine.createSpy('detach');

    directiveInstance = directive(registry, tether);
    directiveInstance.link(scope, element, attrs);
  });

  describe('link', function () {
    it('registers popover', function () {
      expect(registry.register).toHaveBeenCalledWith('popover-id', scope);
    });
  });

  describe('show', function () {
    it('sets open to true', function () {
      scope.open = false;
      scope.show(target);

      expect(scope.open).toBe(true);
    });

    it('attaches popover to trigger', function () {
      scope.open = false;
      scope.show(target);

      expect(tether.attach).toHaveBeenCalledWith(target, element);
    });
  });

  describe('hide', function () {
    it('sets open to false', function () {
      scope.open = true;
      scope.hide();

      expect(scope.open).toBe(false);
    });

    it('detaches popover from trigger', function () {
      scope.open = true;
      scope.hide();

      expect(tether.detach).toHaveBeenCalledWith(element);
    });
  });

  describe('toggle', function () {
    it('repositions popover when initially false', function () {
      scope.open = false;
      scope.toggle(target);

      expect(tether.attach).toHaveBeenCalledWith(target, element);
    });

    it('sets open to true when initially false', function () {
      scope.open = false;
      scope.toggle(target);

      expect(scope.open).toBe(true);
    });

    it('sets open to false when initially true', function () {
      scope.open = true;
      scope.toggle(target);

      expect(scope.open).toBe(false);
    });
  });
});

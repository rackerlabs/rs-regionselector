var PopoverController = require('../../src/javascripts/popoverController');
var Registry = require('../../src/javascripts/registry');
var Tether = require('../../src/javascripts/tether');

describe('popoverController', function () {
  'use strict';

  var scope, registry, tether, target, controller;

  beforeEach(function () {
    scope = { popoverId: 'popover-id', popoverElement: jasmine.createSpy('element') };

    registry = new Registry();
    registry.register = jasmine.createSpy('register');

    tether = new Tether();
    target = jasmine.createSpy('target');

    controller = new PopoverController(scope, registry, tether);
  });

  it('sets open to false', function () {
    expect(scope.open).toBe(false);
  });

  it('stretches overlay to fill screen', function () {
    expect(scope.overlay).toEqual({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 });
  });

  it('registers popover', function () {
    expect(registry.register).toHaveBeenCalledWith(scope.popoverId, controller);
  });

  describe('show', function () {
    beforeEach(function () {
      spyOn(tether, 'attach');

      scope.open = false;
    });

    it('sets open to true', function () {
      controller.show(target);

      expect(scope.open).toBe(true);
    });

    it('attaches popover to target', function () {
      controller.show(target);

      expect(tether.attach).toHaveBeenCalledWith(scope.popoverElement, target);
    });
  });

  describe('hide', function () {
    beforeEach(function () {
      spyOn(tether, 'detach');

      scope.open = true;
    });

    it('sets open to false', function () {
      controller.hide();

      expect(scope.open).toBe(false);
    });

    it('detaches popover from target', function () {
      controller.hide();

      expect(tether.detach).toHaveBeenCalledWith(scope.popoverElement);
    });
  });

  describe('toggle', function () {
    beforeEach(function () {
      spyOn(controller, 'show');
      spyOn(controller, 'hide');
    });

    it('shows popover when popover is closed', function () {
      scope.open = false;

      controller.toggle(target);

      expect(controller.show).toHaveBeenCalledWith(target);
    });

    it('hides popover when popover is open', function () {
      scope.open = true;

      controller.toggle(target);

      expect(controller.hide).toHaveBeenCalled();
    });
  });
});

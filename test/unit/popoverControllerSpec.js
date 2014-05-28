var PopoverController = require('../../src/javascripts/popoverController');
var Registry = require('../../src/javascripts/registry');
var Tether = require('../../src/javascripts/tether');

describe('popoverController', function () {
  'use strict';

  var scope, element, registry, tether, target, controller;

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

  it('sets loading to false', function () {
    expect(scope.loading).toBe(false);
  });

  it('stretches overlay to fill screen', function () {
    expect(scope.overlay).toEqual({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 });
  });

  it('registers popover', function () {
    expect(registry.register).toHaveBeenCalledWith(scope.popoverId, controller);
  });

  describe('show', function () {
    var loadingDeferred;

    beforeEach(inject(function ($q) {
      spyOn(tether, 'attach');

      scope.open = false;
      scope.loading = false;

      loadingDeferred = $q.defer();
    }));

    it('sets open to true', function () {
      controller.show(target);

      expect(scope.open).toBe(true);
    });

    it('attaches popover to target', function () {
      controller.show(target);

      expect(tether.attach).toHaveBeenCalledWith(scope.popoverElement, target);
    });

    it('sets loading to false if onOpen hook is not provided', function () {
      controller.show(target);

      expect(scope.loading).toBe(false);
    });

    it('sets loading to true if onOpen hook is provided', inject(function ($q) {
      scope.onOpen = jasmine.createSpy('onOpen').andReturn(loadingDeferred.promise);

      controller.show(target);

      expect(scope.loading).toBe(true);
    }));

    it('sets loading to false when hook finished', inject(function ($q, $rootScope) {
      scope.onOpen = jasmine.createSpy('onOpen').andReturn(loadingDeferred.promise);

      controller.show(target);
      loadingDeferred.resolve();
      $rootScope.$apply();

      expect(scope.loading).toBe(false);
    }));

    it('sets loading to false when hook fails', inject(function ($q, $rootScope) {
      scope.onOpen = jasmine.createSpy('onOpen').andReturn(loadingDeferred.promise);

      controller.show(target);
      loadingDeferred.reject('something failed');
      $rootScope.$apply();

      expect(scope.loading).toBe(false);
    }));
  });

  describe('hide', function () {
    beforeEach(function () {
      spyOn(tether, 'detach');

      scope.open = true;
      scope.loading = true;
    });

    it('sets open to false', function () {
      controller.hide();

      expect(scope.open).toBe(false);
    });

    it('sets loading to false', function () {
      controller.hide();

      expect(scope.loading).toBe(false);
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

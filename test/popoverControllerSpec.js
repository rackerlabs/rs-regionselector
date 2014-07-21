describe('rs.popover.PopoverController', function () {
  'use strict';

  var scope, element, registry, tether, target, controller;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function ($rootScope, $controller, _registry_, _tether_) {
    scope = $rootScope.$new();
    scope.id = 'mypopover';
    element = angular.element('<div></div>');

    registry = _registry_;
    spyOn(registry, 'register');

    tether = _tether_;
    spyOn(tether, 'attach');

    target = angular.element();
    controller = $controller('PopoverController', {
      $scope: scope,
      $element: element
    });
  }));

  it('registers popover', function () {
    expect(registry.register).toHaveBeenCalledWith('mypopover', controller);
  });

  describe('show', function () {
    it('transitions popover in loading state', function () {
      controller.show(target);

      expect(controller.is('loading')).toBe(true);
    });

    it('tethers element to target', function () {
      controller.show(target);

      expect(tether.attach).toHaveBeenCalledWith(element, target);
    });
  });

  describe('hide', function () {
    it('transitions popover to closed state', function () {
      controller.show(target);
      controller.hide();

      expect(controller.is('closed')).toBe(true);
    });
  });

  describe('toggle', function () {
    beforeEach(function () {
      spyOn(controller, 'show');
      spyOn(controller, 'hide');

      controller.state = {};
      controller.state.is = jasmine.createSpy('is');
    });

    it('shows popover when it is closed', function () {
      controller.state.is.andCallFake(function (state) {
        return state === 'closed';
      });

      controller.toggle(target);

      expect(controller.show).toHaveBeenCalledWith(target);
    });

    it('hides popover when it is not closed', function () {
      controller.state.is.andCallFake(function (state) {
        return state !== 'closed';
      });

      controller.toggle(target);

      expect(controller.hide).toHaveBeenCalledWith();
    });
  });
});

describe('rs.popover.PopoverController', function () {
  'use strict';

  var scope, registry, target, controller;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function ($controller, _registry_) {
    scope = {};
    scope.id = 'mypopover';

    registry = _registry_;
    spyOn(registry, 'register');

    target = angular.element();
    controller = $controller('PopoverController', { $scope: scope });
  }));

  it('registers popover', function () {
    expect(registry.register).toHaveBeenCalledWith('mypopover', scope);
  });

  describe('show', function () {
    it('transitions popover in loading state', function () {
      scope.show(target);

      expect(scope.is('loading')).toBe(true);
    });

    it('tethers element to target', function () {

    });
  });

  describe('hide', function () {
    it('transitions popover to closed state', function () {
      scope.show(target);
      scope.hide();

      expect(scope.is('closed')).toBe(true);
    });
  });

  describe('toggle', function () {
    beforeEach(function () {
      spyOn(scope, 'show');
      spyOn(scope, 'hide');

      scope.state = {};
      scope.state.is = jasmine.createSpy('is');
    });

    it('shows popover when it is closed', function () {
      scope.state.is.andCallFake(function (state) {
        return state === 'closed';
      });

      scope.toggle(target);

      expect(scope.show).toHaveBeenCalledWith(target);
    });

    it('hides popover when it is not closed', function () {
      scope.state.is.andCallFake(function (state) {
        return state !== 'closed';
      });

      scope.toggle(target);

      expect(scope.hide).toHaveBeenCalledWith();
    });
  });
});

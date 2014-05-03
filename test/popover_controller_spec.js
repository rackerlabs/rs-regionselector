describe('PopoverController', function () {
  'use strict';

  var scope;

  beforeEach(function () {
    module('rsPopover');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('PopoverController', { $scope: scope });
    });
  });

  describe('open', function () {
    it('is initially false', function () {
      expect(scope.open).toBe(false);
    });
  });

  describe('show', function () {
    it('sets open to true', function () {
      scope.open = false;
      scope.show();

      expect(scope.open).toBe(true);
    });
  });

  describe('hide', function () {
    it('sets open to false', function () {
      scope.open = true;
      scope.hide();

      expect(scope.open).toBe(false);
    });
  });
});

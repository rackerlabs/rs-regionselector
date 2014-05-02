describe('PopoverController', function () {
  'use strict';

  var $scope;

  beforeEach(function () {
    module('rsPopover');
    inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('PopoverController', { $scope: $scope });
    });
  });

  describe('visible', function () {
    it('is initially false', function () {
      expect($scope.visible).toBe(false);
    });
  });

  describe('show', function () {
    it('sets visible to true', function () {
      $scope.visible = false;
      $scope.show();

      expect($scope.visible).toBe(true);
    });
  });

  describe('hide', function () {
    it('sets visible to false', function () {
      $scope.visible = true;
      $scope.hide();

      expect($scope.visible).toBe(false);
    });
  });
});

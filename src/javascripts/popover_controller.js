angular.module('rsPopover').controller('PopoverController', function ($scope) {
  'use strict';

  $scope.visible = false;

  $scope.show = function () {
    $scope.visible = true;
  };

  $scope.hide = function () {
    $scope.visible = false;
  };
});

module.exports = function ($scope) {
  'use strict';

  $scope.open = false;
  $scope.overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0
  };

  $scope.show = function () {
    $scope.open = true;
  };

  $scope.hide = function () {
    $scope.open = false;
  };

  $scope.toggle = function () {
    $scope.open = !$scope.open;
  };

  this.popoverId = function () {
    return $scope.popoverId;
  };
};

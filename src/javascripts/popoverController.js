module.exports = function ($scope) {
  'use strict';

  $scope.open = false;

  $scope.show = function () {
    $scope.open = true;
  };

  $scope.hide = function () {
    $scope.open = false;
  };

  $scope.toggle = function () {
    $scope.open = !$scope.open;
  };
};

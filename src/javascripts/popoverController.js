angular.module('rs.popover').controller('PopoverController', function ($scope, registry, Popover) {
  'use strict';

  $scope.state = new Popover();
  registry.register($scope.id, $scope);

  $scope.is = function (state) {
    return $scope.state.is(state);
  };

  $scope.show = function () {
    $scope.state.open();
  };

  $scope.hide = function () {
    $scope.state = new Popover();
  };

  $scope.toggle = function (target) {
    if ($scope.is('closed')) {
      $scope.show(target);
    } else {
      $scope.hide();
    }
  };
});


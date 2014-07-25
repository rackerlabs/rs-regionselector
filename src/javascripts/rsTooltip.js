angular.module('rs.popover').directive('rsTooltip', function () {
  'use strict';

  return {
    scope: {
      id: '@',
      onOpen: '='
    },
    restrict: 'EA',
    controller: 'PopoverController',
    controllerAs: 'ctrl',
    transclude: true,
    templateUrl: 'rsTooltip.html'
  };
});

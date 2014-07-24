angular.module('rs.popover').directive('rsRegionSelector', function () {
  'use strict';

  return {
    scope: {
      id: '@',
      onOpen: '='
    },
    restrict: 'EA',
    controller: 'PopoverController',
    controllerAs: 'ctrl',
    transclude: false,
    templateUrl: 'rsRegionSelector.html'
  };
});

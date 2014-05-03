angular.module('rsPopover').directive('rsPopover', function () {
  'use strict';

  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/popover.html',
    controller: 'PopoverController',
    scope: {
      id: '@',
      open: '='
    }
  };
});

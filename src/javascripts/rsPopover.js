angular.module('rs.popover').directive(function () {
  'use strict';

  return {
    scope: {
      id: '@',
      onOpen: '='
    },
    restrict: 'EA',
    transclude: true,
    templateUrl: 'rsPopover.html'
  };
});

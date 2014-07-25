angular.module('rs.popover').directive('rsServerTable', function () {
  'use strict';

  return {
    scope: {
      id: '@'
    },
    restrict: 'EA',
    controller: 'ServerTableController',
    controllerAs: 'ctrl',
    transclude: false,
    templateUrl: 'rsServerTable.html'
  };
});

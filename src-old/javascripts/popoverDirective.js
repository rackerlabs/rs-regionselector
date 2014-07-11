module.exports = function () {
  'use strict';

  return {
    restrict: 'E',
    transclude: true,
    template: require('../templates/popover.html'),
    controller: 'PopoverController',
    controllerAs: 'controller',
    scope: {
      popoverId: '@',
      onOpen: '='
    },
    link: function (scope, element) {
      scope.popoverElement = element;
    }
  };
};

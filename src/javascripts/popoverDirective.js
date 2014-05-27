module.exports = function () {
  'use strict';

  return {
    restrict: 'E',
    transclude: true,
    template: require('../templates/popover.html'),
    controller: 'PopoverController',
    scope: {
      popoverId: '@'
    },
    link: function (scope, element) {
      scope.popoverElement = element;
    }
  };
};

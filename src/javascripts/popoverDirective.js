module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'E',
    transclude: true,
    template: require('../templates/popover.html'),
    controller: 'PopoverController',
    scope: {
      popoverId: '@'
    },
    link: function (scope, element, attrs) {
      registry.register(attrs.popoverId, scope);
    }
  };
};

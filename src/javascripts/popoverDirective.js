module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'E',
    transclude: true,
    template: require('../templates/popover.html'),
    controller: 'PopoverController',
    scope: {
      id: '@'
    },
    link: function (scope, element, attrs) {
      registry.register(attrs.id, scope);
    }
  };
};

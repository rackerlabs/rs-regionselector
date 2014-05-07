module.exports = function (registry, attachment) {
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
      scope.toggle = function (target) {
        if (scope.open) {
          scope.hide();
        } else {
          scope.show(target);
        }
      };

      scope.show = function (target) {
        scope.open = true;
        attachment.attach(target, element);
      };

      scope.hide = function () {
        scope.open = false;
      };

      registry.register(attrs.popoverId, scope);
    }
  };
};

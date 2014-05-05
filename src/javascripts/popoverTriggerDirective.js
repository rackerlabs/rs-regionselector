module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      popoverId: '@',
      popoverEvent: '@'
    },
    link: function (scope, element, attrs) {
      element.on('click', function () {
        registry.popover(attrs.popoverId).show();
        scope.$apply();
      });
    }
  };
};

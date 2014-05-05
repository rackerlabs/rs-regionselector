module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      popoverId: '@',
      popoverEvent: '@'
    },
    link: function (scope, element, attrs) {
      var eventType = attrs.popoverEvent || 'click';

      element.on(eventType, function () {
        registry.popover(attrs.popoverId).toggle();
        scope.$apply();
      });
    }
  };
};

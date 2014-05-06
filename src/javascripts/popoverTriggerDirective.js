module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    require: '?^rsPopover',
    scope: {
      popoverId: '@',
      popoverEvent: '@'
    },
    link: function (scope, element, attrs, popoverController) {
      var popoverId, eventType;

      if (attrs.popoverId) {
        popoverId = attrs.popoverId;
      } else if (popoverController) {
        popoverId = popoverController.popoverId();
      }

      eventType = attrs.popoverEvent || 'click';

      element.on(eventType, function () {
        registry.popover(popoverId).toggle();
        scope.$apply();
      });
    }
  };
};

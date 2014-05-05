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

      popoverId = popoverController ? popoverController.popoverId() : attrs.popoverId;
      eventType = attrs.popoverEvent || 'click';

      element.on(eventType, function () {
        registry.popover(popoverId).toggle();
        scope.$apply();
      });
    }
  };
};

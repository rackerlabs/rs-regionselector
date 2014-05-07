module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    require: '?^rsPopover',
    link: function (scope, element, attrs, popoverController) {
      var popoverId;

      if (attrs.rsPopoverTrigger) {
        popoverId = attrs.rsPopoverTrigger;
      } else if (popoverController) {
        popoverId = popoverController.popoverId();
      }

      element.on('click', function () {
        registry.popover(popoverId).toggle();
        scope.$apply();
      });
    }
  };
};

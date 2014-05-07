module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    require: '?^rsPopover',
    link: function (scope, element, attrs, popoverController) {
      var popoverId;

      if (attrs.rsPopoverTrigger === '') {
        popoverId = popoverController.popoverId();
      } else {
        popoverId = attrs.rsPopoverTrigger;
      }

      element.on('click', function () {
        registry.popover(popoverId).toggle(element);
        scope.$apply();
      });
    }
  };
};

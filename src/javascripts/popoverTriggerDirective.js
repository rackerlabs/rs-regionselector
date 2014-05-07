module.exports = function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    require: '?^rsPopover',
    scope: {
      popoverId: '@'
    },
    link: function (scope, element, attrs, popoverController) {
      var popoverId;

      if (attrs.popoverId) {
        popoverId = attrs.popoverId;
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

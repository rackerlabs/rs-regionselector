angular.module('rs.popover').directive('rsPopoverTrigger', function (registry) {
  'use strict';

  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        registry.toggle(attrs.rsPopoverTrigger);
      });
    }
  };
});

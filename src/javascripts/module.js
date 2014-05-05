/* global window */

var angular = window.angular;

angular.module('rsPopover', [])
  .directive('rsPopover', require('./popoverDirective'))
  .controller('PopoverController', ['$scope', require('./popoverController')]);

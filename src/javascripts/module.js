/* global window */

var angular = window.angular;

angular.module('rsPopover', [])
  .service('registry', require('./popoverRegistry'))
  .controller('PopoverController', ['$scope', require('./popoverController')])
  .directive('rsPopover', ['registry', require('./popoverDirective')])
  .directive('rsPopoverTrigger', ['registry', require('./popoverTriggerDirective')]);

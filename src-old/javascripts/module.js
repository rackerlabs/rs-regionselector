/* global window */

var angular = window.angular;

angular.module('rsPopover', [])
  .service('tether', ['$window', require('./tether')])
  .service('registry', require('./registry'))
  .controller('PopoverController', ['$scope', 'registry', 'tether', require('./popoverController')])
  .directive('rsPopover', ['registry', 'tether', require('./popoverDirective')])
  .directive('rsPopoverTrigger', ['registry', require('./popoverTriggerDirective')]);

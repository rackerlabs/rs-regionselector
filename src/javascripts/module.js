/* global window */

var angular = window.angular;

angular.module('rsPopover', [])
  .service('registry', require('./popoverRegistry'))
  .directive('rsPopover', ['registry', require('./popoverDirective')])
  .controller('PopoverController', ['$scope', require('./popoverController')]);

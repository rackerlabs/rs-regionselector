/* global window */

var angular = window.angular;

angular.module('rsPopover', [])
  .factory('attachment', require('./attachmentService'))
  .service('registry', require('./popoverRegistry'))
  .controller('PopoverController', ['$scope', require('./popoverController')])
  .directive('rsPopover', ['registry', 'attachment', require('./popoverDirective')])
  .directive('rsPopoverTrigger', ['registry', require('./popoverTriggerDirective')]);

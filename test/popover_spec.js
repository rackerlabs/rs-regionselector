describe('rsPopover', function () {
  'use strict';

  var scope, element;

  beforeEach(function () {
    module('rsPopover');
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = $compile('<rs-popover>Content</rs-popover>')($rootScope);
    });
  });
});

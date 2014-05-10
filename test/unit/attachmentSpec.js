var Attachment = require('../../src/javascripts/attachment');

describe('Attachment', function () {
  'use strict';

  var attachment, target, popover;

  beforeEach(function () {
    target = angular.element('<div></div>');
    popover = angular.element('<div><div class="rs-popover"></div></div>');

    attachment = new Attachment(target, popover);
  });

  describe('position', function () {
    it('repositions popover', function () {
      var position;

      position = { top: 0, left: 0 };
      target.offset = jasmine.createSpy('offset').andReturn(position);
      target.outerHeight = jasmine.createSpy('outerHeight').andReturn(50);
      target.outerWidth = jasmine.createSpy('outerWidth').andReturn(50);

      attachment.position();

      expect(position).toEqual({ top: 61, left: -8 });
    });
  });
});

describe('rs.popover.Attachment', function () {
  'use strict';

  var target, popover, attachment;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (Attachment) {
    target = angular.element('<div></div>');
    popover = angular.element('<div><div class="rs-popover"></div></div>');
    attachment = new Attachment(popover, target);
  }));

  describe('position', function () {
    it('repositions element', function () {
      var position, popoverElement, top, left;

      position = { top: 0, left: 0 };
      target.offset = jasmine.createSpy('offset').andReturn(position);
      target.outerHeight = jasmine.createSpy('outerHeight').andReturn(50);
      target.outerWidth = jasmine.createSpy('outerWidth').andReturn(50);

      attachment.position();

      popoverElement = $('.rs-popover', popover).first();
      top = popoverElement.css('top');
      left = popoverElement.css('left');

      expect(top).toBe('61px');
      expect(left).toBe('-8px');
    });
  });
});

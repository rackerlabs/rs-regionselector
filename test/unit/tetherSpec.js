var Tether = require('../../src/javascripts/tether');

describe('Tether', function () {
  'use strict';

  var fakeWindow, tether, target, popover, attachment;

  beforeEach(function () {
    fakeWindow = angular.element('<div></div>');
    tether = new Tether(fakeWindow);

    target = angular.element('<div></div>');
    popover = angular.element('<div><div class="rs-popover"></div></div>');

    attachment = tether.attach(target, popover);
    attachment.position = jasmine.createSpy('position');
  });

  describe('attach', function () {
    it('triggers reposition when scroll occurs', function () {
      fakeWindow.triggerHandler('scroll');

      expect(attachment.position).toHaveBeenCalled();
    });

    it('triggers reposition when window resizes', function () {
      fakeWindow.triggerHandler('resize');

      expect(attachment.position).toHaveBeenCalled();
    });
  });

  describe('detach', function () {
    it('does not trigger reposition after being detached', function () {
      tether.detach(popover);

      fakeWindow.triggerHandler('scroll');

      expect(attachment.position).not.toHaveBeenCalled();
    });
  });
});

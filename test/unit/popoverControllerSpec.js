var controller = require('../../src/javascripts/popoverController');

describe('popoverController', function () {
  'use strict';

  var scope, attachmentService;

  beforeEach(function () {
    scope = {};
    attachmentService = {
      attach: jasmine.createSpy('attach')
    };

    controller(scope, attachmentService);
  });

  describe('overlay', function () {
    it('stretches overlay to fill screen', function () {
      expect(scope.overlay).toEqual({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0
      });
    });
  });

  describe('open', function () {
    it('defaults to false', function () {
      expect(scope.open).toBe(false);
    });
  });
});

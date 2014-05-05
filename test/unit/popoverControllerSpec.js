var controller = require('../../src/javascripts/popoverController');

describe('popoverController', function () {
  var scope;

  beforeEach(function () {
    scope = {};
    controller(scope);
  });

  describe('open', function () {
    it('defaults to false', function () {
      expect(scope.open).toBe(false);
    });
  });

  describe('show', function () {
    it('sets open to true', function () {
      scope.open = false;
      scope.show();

      expect(scope.open).toBe(true);
    });
  });

  describe('hide', function () {
    it('sets open to false', function () {
      scope.open = true;
      scope.hide();

      expect(scope.open).toBe(false);
    });
  });

  describe('toggle', function () {
    it('sets open to true when initially false', function () {
      scope.open = false;
      scope.toggle();

      expect(scope.open).toBe(true);
    });

    it('sets open to false when initially true', function () {
      scope.open = true;
      scope.toggle();

      expect(scope.open).toBe(false);
    });
  });
});

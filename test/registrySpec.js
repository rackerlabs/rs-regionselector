describe('rs.popover.Registry', function () {
  var registry;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (_registry_) {
    registry = _registry_;
  }));

  describe('register', function () {
    it('raises exception for empty ID', function () {
      expect(function () {
        registry.register('', {});
      }).toThrow('Popover ID must not be empty!');
    });

    it('raises exception for non-unique ID', function () {
      registry.register('unique', {});

      expect(function () {
        registry.register('unique');
      }).toThrow('Popover ID "unique" has already been registered!');
    });
  });

  describe('toggle', function () {
    it('toggles registered popover', function () {
      var controller;

      controller = {};
      controller.toggle = jasmine.createSpy('toggle');

      registry.register('mypopover', controller);
      registry.toggle('mypopover');

      expect(controller.toggle).toHaveBeenCalledWith();
    });

    it('raises exception for unregistered popover', function () {
      expect(function () {
        registry.toggle('unregistered');
      }).toThrow('Popover ID "unregistered" has not been registered!');
    });
  });
});

describe('rs.popover.rsPopoverTrigger', function () {
  var scope, registry;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (_registry_) {
    scope = {};
    registry = _registry_;
    spyOn(registry, 'toggle');
  }));

  describe('link', function () {
    it('toggles popover specified by attribute', inject(function ($compile) {
      var element;

      element = $compile('<a rs-popover-trigger="mypopover"></a>')(scope);
      element.triggerHandler('click');

      expect(registry.toggle).toHaveBeenCalledWith('mypopover');
    }));

    it('toggles popover specified by controller', inject(function ($compile) {
      // TODO: Implement this.
    }));
  });
});

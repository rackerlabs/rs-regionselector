describe('rs.popover.rsPopoverTrigger', function () {
  var scope, popover, registry;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function ($rootScope, _registry_) {
    scope = $rootScope.$new();
    popover = { toggle: jasmine.createSpy('toggle') };
    registry = _registry_;

    spyOn(registry, 'popover').andReturn(popover);
  }));

  describe('link', function () {
    it('toggles popover specified by attribute', inject(function ($compile) {
      var element;

      element = $compile('<a rs-popover-trigger="mypopover"></a>')(scope);
      element.triggerHandler('click');

      expect(popover.toggle).toHaveBeenCalled();
      expect(registry.popover).toHaveBeenCalledWith('mypopover');
    }));
  });
});

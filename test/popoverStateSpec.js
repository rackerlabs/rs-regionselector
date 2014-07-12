describe('rs.popover.PopoverState', function () {
  'use strict';

  var q, scope, PopoverState, fsm;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (_PopoverState_, $q, $rootScope) {
    q = $q;
    scope = $rootScope;
    PopoverState = _PopoverState_;
  }));

  it('is initially closed', function () {
    fsm = new PopoverState();
    expect(fsm.state).toBe('closed');
  });

  describe('open', function () {
    var onOpen, onOpenDeferred;

    beforeEach(function () {
      onOpenDeferred = q.defer();
      onOpen = jasmine.createSpy('onOpen').andReturn(onOpenDeferred.promise);
      fsm = new PopoverState(onOpen);
    });

    it('transitions state to loading', function () {
      fsm.open();

      expect(fsm.state).toBe('loading');
    });

    it('executes onOpen callback', function () {
      fsm.open();

      expect(onOpen).toHaveBeenCalledWith();
    });

    it('calls load when onOpen callback resolves', function () {
      spyOn(fsm, 'load');

      fsm.open();
      onOpenDeferred.resolve();
      scope.$digest();

      expect(fsm.load).toHaveBeenCalled();
    });

    it('calls error when onOpen callback fails', function () {
      spyOn(fsm, 'error');

      fsm.open();
      onOpenDeferred.reject('fail');
      scope.$digest();

      expect(fsm.error).toHaveBeenCalledWith('fail');
    });
  });

  describe('load', function () {
    beforeEach(function () {
      fsm = new PopoverState();
    });

    it('transitions state to open', function () {
      fsm.load();

      expect(fsm.state).toBe('open');
    });
  });

  describe('error', function () {
    beforeEach(function () {
      fsm = new PopoverState();
    });

    it('transitions state to error', function () {
      fsm.error('everything is broken');

      expect(fsm.state).toBe('error');
    });

    it('sets message to provided argument', function () {
      fsm.error('everything is broken');

      expect(fsm.message).toBe('everything is broken');
    });
  });
});

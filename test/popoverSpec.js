describe('rs.popover.Popover', function () {
  'use strict';

  var q, scope, Popover, fsm;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (_Popover_, $q, $rootScope) {
    q = $q;
    scope = $rootScope;
    Popover = _Popover_;
  }));

  it('is initially closed', function () {
    fsm = new Popover();
    expect(fsm.is('closed')).toBe(true);
  });

  describe('open', function () {
    var onOpen, onOpenDeferred;

    beforeEach(function () {
      onOpenDeferred = q.defer();
      onOpen = jasmine.createSpy('onOpen').andReturn(onOpenDeferred.promise);
      fsm = new Popover(onOpen);
    });

    it('transitions state to loading', function () {
      fsm.open();

      expect(fsm.is('loading')).toBe(true);
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
      fsm = new Popover();
    });

    it('transitions state to open', function () {
      fsm.load();

      expect(fsm.is('open')).toBe(true);
    });
  });

  describe('error', function () {
    beforeEach(function () {
      fsm = new Popover();
    });

    it('transitions state to error', function () {
      fsm.error('everything is broken');

      expect(fsm.is('error')).toBe(true);
    });

    it('sets message to provided argument', function () {
      fsm.error('everything is broken');

      expect(fsm.message).toBe('everything is broken');
    });
  });
});

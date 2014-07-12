angular.module('rs.popover').factory('PopoverState', function ($q) {
  'use strict';

  function PopoverState(onOpen) {
    this.state = 'closed';
    this.onOpen = onOpen || function () {
      var deferred;

      deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };
  }

  PopoverState.prototype.open = function () {
    this.state = PopoverState.LOADING;
    this.onOpen.call(this)
      .then(this.load)
      .catch(this.error);
  };

  PopoverState.prototype.load = function () {
    this.state = PopoverState.OPEN;
  };

  PopoverState.prototype.error = function (message) {
    this.state = PopoverState.ERROR;
    this.message = message;
  };

  PopoverState.LOADING = 'loading';
  PopoverState.OPEN = 'open';
  PopoverState.ERROR = 'error';

  return PopoverState;
});

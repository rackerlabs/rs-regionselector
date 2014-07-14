angular.module('rs.popover').factory('Popover', function ($q) {
  'use strict';

  function Popover(onOpen) {
    this.state = 'closed';
    this.onOpen = onOpen || function () {
      var deferred;

      deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };
  }

  Popover.prototype.is = function (state) {
    return this.state === state;
  };

  Popover.prototype.open = function () {
    this.state = Popover.LOADING;
    this.onOpen.call(this)
      .then(this.load)
      .catch(this.error);
  };

  Popover.prototype.load = function () {
    this.state = Popover.OPEN;
  };

  Popover.prototype.error = function (message) {
    this.state = Popover.ERROR;
    this.message = message;
  };

  Popover.LOADING = 'loading';
  Popover.OPEN = 'open';
  Popover.ERROR = 'error';

  return Popover;
});

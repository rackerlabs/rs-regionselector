angular.module('rs.popover').factory('selectedRegionRegistry', function () {
  'use strict';

  function selectedRegionRegistry () {
    this.property = {};
    this.observerCallbacks = [];
  }

  selectedRegionRegistry.prototype.registerObserverCallback = function (callback) {
    this.observerCallbacks.push(callback);
  };

  selectedRegionRegistry.prototype.notifyObservers = function () {
    angular.forEach(this.observerCallbacks, function (callback) {
      callback();
    });
  };

  selectedRegionRegistry.prototype.getProperty =  function () {
    return this.property;
  };

  selectedRegionRegistry.prototype.setProperty = function(key, value) {
    this.property[key] = value;
    this.notifyObservers();
  };

  return new selectedRegionRegistry();
});

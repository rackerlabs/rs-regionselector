angular.module('rs.popover').controller('PopoverController', function ($scope, $element, registry, tether, Popover) {
  'use strict';

  registry.register($scope.id, this);

  this.state = new Popover($scope.onOpen);

  this.id = function () {
    return $scope.id;
  };

  this.is = function (state) {
    return this.state.is(state);
  };

  this.show = function (target) {
    this.state.open();
    tether.attach($element, target);
  };

  this.hide = function () {
    this.state = new Popover($scope.onOpen);
  };

  this.toggle = function (target) {
    if (this.state.is('closed')) {
      this.show(target);
    } else {
      this.hide();
    }
  };
});


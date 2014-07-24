angular.module('rs.popover').controller('PopoverController', function ($scope, $element, registry, tether, Popover, selectedRegionRegistry) {
  'use strict';

  registry.register($scope.id, this);

  this.state = new Popover($scope.onOpen);

  $scope.regions = [
    {
      "name": "United States",
      "subregions": [
        {
          "name": "Northern Virginia (IAD)"
        },
        {
          "name": "Chicago (ORD)"
        },
        {
          "name": "Dallas (DFW)"
        }
      ]
    },
    {
      "name": "Europe",
      "subregions": [
        {
          "name": "London (LON)"
        }
      ]
    },
    {
      "name": "Asia-Pacific",
      "subregions": [
        {
          "name": "Hong Kong (HKG)"
        },
        {
          "name": "Sydney (SYD)"
        }
      ]
    }
  ];

  $scope.activeRegions = [
    "United States",
    "Northern Virginia (IAD)",
    "Chicago (ORD)",
    "Dallas (DFW)",
    "Asia-Pacific",
    "Hong Kong (HKG)",
    "Sydney (SYD)"
  ];

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

  this.setSelected = function (selected) {
    selectedRegionRegistry.setProperty("selectedRegion", selected);
    this.hide();
  };

  this.isDisabled = function (region) {
    return $scope.activeRegions.indexOf(region) === -1;
  };
});


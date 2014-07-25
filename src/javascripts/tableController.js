angular.module('rs.popover').controller('ServerTableController', function ($scope, $element, selectedRegionRegistry) {
  'use strict';

  $scope.servers = [
    {
      "name": "Minecraft",
      "regions": [
        {
          "name": "Northern Virginia (IAD)"
        },
        {
          "name": "United States"
        }
      ],
      "tags": [
        "Game",
        "Minecraft"
      ],
      "ip": "162.209.108.245",
      "monitoring": "Daily Check"
    },
    {
      "name": "Blog",
      "regions": [
        {
          "name": "Chicago (ORD)"
        },
        {
          "name": "United States"
        }
      ],
      "tags": [
        "Personal",
        "Blog"
      ],
      "ip": "123.456.789.0000",
      "monitoring": "None"
    }
  ];

  var updateSelectedRegion = function () {
    $scope.selectedRegion = selectedRegionRegistry.getProperty()["selectedRegion"];
  };

  selectedRegionRegistry.registerObserverCallback(updateSelectedRegion);
});


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
          "name": "All Regions (Global)"
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
          "name": "All Regions (Global)"
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
    },
    {
      "name": "Dev Server",
      "regions": [
        {
          "name": "Northern Virginia (IAD)"
        },
        {
          "name": "All Regions (Global)"
        },
        {
          "name": "United States"
        }
      ],
      "tags": [
        "Business",
        "Dev",
        "Test"
      ],
      "ip": "8.123.123.123",
      "monitoring": "2 Checks Daily"
    },
    {
      "name": "Production Server",
      "regions": [
        {
          "name": "Hong Kong (HKG)"
        },
        {
          "name": "All Regions (Global)"
        },
        {
          "name": "Asia-Pacific"
        }
      ],
      "tags": [
        "Business",
        "Production"
      ],
      "ip": "1.1.1.1",
      "monitoring": "23 Checks Daily"
    }
  ];

  var updateSelectedRegion = function () {
    $scope.selectedRegion = selectedRegionRegistry.getProperty()["selectedRegion"];
  };

  selectedRegionRegistry.registerObserverCallback(updateSelectedRegion);
});


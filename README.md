# rs-regionselector

Angular directive for [Canon](http://rackerlabs.github.io/canon) region selector.

## Requirements

- AngularJS v1.2 or higher
- Canon v1.1 or higher
- jQuery v1.9 or higher

## Installation

This package is not currently published to either NPM or Bower. Once the API
stabilizes, the built files will be published. Until then, you can install 
directly from the GitHub repository.

To install with Bower, add the following line to dependencies in your bower.json:

```
"rs-regionselector": "https://github.com/rackerlabs/rs-regionselector.git"
```

## Usage

### `rs-region-selector`

This directive defines a region selector and can be used as either an element or an
attribute. All instances of this attribute must have a unique `id` attribute.

```
<rs-region-selector id="region-select" attach=".rs-dropdown"></rs-region-selector>
```

#### Attributes

##### `id`

Accepts any unique string used to identity this directive. This attribute is 
required and must be unique across all other elements on the page.

##### `on-open`

Accepts the name of a function to be called when the popover is opened. This 
function should return a promise. A loading pattern will be displayed until the
promise returned by this method is resolved. This attribute is optional.

##### `attach`

Used in the tether/attachment classes in a jQuery search for the closest occurrence of that element ("div"), id ("#id"), class (".class"), etc. It will be attached to the bottom of this element.

### Button trigger

```
<button class="rs-btn" ng-click="show($event)" trigger="region-select">Toggle Me!</button>
```

#### Attributes

##### `ng-click`

Calls on the controller show method used to display the directive this button is linked to

##### `trigger`

The ID of the directive item this button toggles. Can be used for toggling popovers as well as
region selector menus

### Controller

The selectedRegionRegistry is used to store values and can be be injected to any controller, which can then use that registry to get said values. I use a callback function from the registry to update the scope value whenever the selected region changes.

```
angular.module('rsPopoverDemo', ['rs.popover']).controller('DemoController', function ($scope, $timeout, registry, selectedRegionRegistry) {
  var updateSelectedRegion = function () {
    $scope.selectedRegion = selectedRegionRegistry.getProperty()["selectedRegion"];
  };

  selectedRegionRegistry.registerObserverCallback(updateSelectedRegion);

  $scope.show = function (e) {
    registry.popover(angular.element(e.currentTarget).attr("trigger")).show(angular.element(e.target));
  };
});
```

## License

rs-popover is released under the [MIT License](LICENSE).

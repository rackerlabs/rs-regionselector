# rs-popover

![https://travis-ci.org/rackerlabs/rs-popover](http://img.shields.io/travis/rackerlabs/rs-popover/master.svg) 
![https://codeclimate.com/github/rackerlabs/rs-popover](http://img.shields.io/codeclimate/github/rackerlabs/rs-popover.svg) 
![https://codeclimate.com/github/rackerlabs/rs-popover](http://img.shields.io/codeclimate/coverage/github/rackerlabs/rs-popover.svg)

Angular directive for [Canon](http://rackerlabs.github.io/canon) popovers.

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
"rs-popover": "https://github.com/rackerlabs/rs-popover.git"
```

## Usage

### `rs-popover`

This directive defines a popover and can be used as either an element or an
attribute. All instances of this attribute must have a unique `id` attribute.

```
<rs-popover id="myPopover">
  This is popover content!
</rs-popover>
```

#### Attributes

##### `id`

Accepts any unique string used to identity this popover. This attribute is 
required and must be unique across all other elements on the page.

##### `on-open`

Accepts the name of a function to be called when the popover is opened. This 
function should return a promise. A loading pattern will be displayed until the
promise returned by this method is resolved. This attribute is optional.

### `rs-popover-trigger`

This directive toggles a popover's visibility and can only be used as an 
attribute.

```
<button rs-popover-trigger="myPopover">Toggle Me!</button>
```

#### Attributes

##### `rs-popover-trigger`

Accepts the ID of the popover it should toggle. If this attribute is used inside
of a popover, it defaults to toggling the containing popover.

### Programmatic Control

In addition to the `rs-popover-trigger` directive for toggling popover 
visibility, this package also provides a service that can be used to control 
popovers programmatically.

```
angular.module('my.module').controller('MyController', function (registry) {
  $scope.toggle = function (e) {
    registry.popover('somepopoverid').toggle(e.target);
  };

  $scope.show = function (e) {
    registry.popover('somepopoverid').show(e.target);
  };

  $scope.hide = function () {
    registry.popover('somepopoverid').hide();
  };
});
```

## License

rs-popover is released under the [MIT License](LICENSE).


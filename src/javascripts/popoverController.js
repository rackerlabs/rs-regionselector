function PopoverController($scope, registry, tether) {
  'use strict';

  this.scope = $scope;
  this.scope.open = false;
  this.scope.overlay = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  this.tether = tether;

  registry.register(this.scope.popoverId, this);
}

PopoverController.prototype.toggle = function (target) {
  'use strict';

  if (this.scope.open) {
    this.hide();
  } else {
    this.show(target);
  }
};

PopoverController.prototype.show = function (target) {
  'use strict';

  this.scope.open = true;
  this.tether.attach(this.scope.popoverElement, target);
};

PopoverController.prototype.hide = function () {
  'use strict';

  this.scope.open = false;
  this.tether.detach(this.scope.popoverElement);
};

PopoverController.prototype.getPopoverId = function () {
  'use strict';

  return this.scope.popoverId;
};

module.exports = PopoverController;

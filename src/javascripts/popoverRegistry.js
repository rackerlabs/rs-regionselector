module.exports = function () {
  'use strict';

  this.popovers_ = [];

  this.register = function (id, scope) {
    if (!id) {
      throw 'Popover ID must not be empty!';
    } else if (this.popovers_.hasOwnProperty(id)) {
      throw 'Popover with id "' + id + '" has already been registered!';
    }

    this.popovers_[id] = scope;
  };

  this.popover = function (id) {
    if (!this.popovers_.hasOwnProperty(id)) {
      throw 'Popover with id "' + id + '" has not been registered!';
    }

    return this.popovers_[id];
  };
};

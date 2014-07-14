angular.module('rs.popover').factory('Attachment', function () {
  var VERTICAL_OFFSET = 11;
  var HORIZONTAL_OFFSET = -33;

  function Attachment(element, target) {
    this.element = element;
    this.target = target;
  }

  Attachment.prototype.position = function () {
    var position, popoverElement;

    position = this.target.offset();
    position.top += this.target.outerHeight() + VERTICAL_OFFSET;
    position.left += this.target.outerWidth() / 2 + HORIZONTAL_OFFSET;

    popoverElement = $('.rs-popover', this.element).first();
    // popoverElement = this.element.find('.rs-popover').first();
    popoverElement.css({ top: position.top, left: position.left });
  };

  return Attachment;
});

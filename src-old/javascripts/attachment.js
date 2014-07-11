var VERTICAL_OFFSET = 11;
var HORIZONTAL_OFFSET = -33;

function Attachment(target, attachment) {
  'use strict';

  this.target = target;
  this.attachment = attachment;
}

Attachment.prototype.position = function () {
  'use strict';

  var position, popoverElement;

  position = this.target.offset();
  position.top += this.target.outerHeight() + VERTICAL_OFFSET;
  position.left += this.target.outerWidth() / 2 + HORIZONTAL_OFFSET;

  popoverElement = this.attachment.find('.rs-popover').first();
  popoverElement.css({ top: position.top, left: position.left });
};

module.exports = Attachment;

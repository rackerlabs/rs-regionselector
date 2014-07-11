var Attachment = require('./attachment');

function Tether($window) {
  'use strict';

  this.attachments = [];

  angular.element($window).on('resize scroll', angular.bind(this, this.reposition));
}

Tether.prototype.attach = function (target, element) {
  'use strict';

  var attachment;

  attachment = new Attachment(target, element);
  attachment.position();

  this.attachments.push(attachment);

  return attachment;
};

Tether.prototype.reposition = function () {
  'use strict';

  angular.forEach(this.attachments, function (attachment) {
    attachment.position();
  });
};

Tether.prototype.detach = function (element) {
  'use strict';

  var index;

  angular.forEach(this.attachments, function (attachment, i) {
    if (attachment.attachment === element) {
      index = i;
    }
  });

  this.attachments.splice(index, 1);
};

module.exports = Tether;

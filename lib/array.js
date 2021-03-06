var Stream = require('./stream')
var util = require('util');

var ArrayStream = module.exports = function(options) {
  Stream.call(this, options);
};
util.inherits(ArrayStream, Stream);

ArrayStream.prototype.write = function(data, meta) {
  if (!util.isArray(data)) return this.emit('error', new Error('received data is not an array'), meta)
  data.forEach(function(item) {
    this.emit('data', item, meta);
  }.bind(this))
  this.emit('drain');
};


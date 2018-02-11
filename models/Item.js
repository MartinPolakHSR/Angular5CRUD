var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);

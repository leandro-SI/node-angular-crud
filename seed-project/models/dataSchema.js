var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name:{type:String}
});

module.exports = mongoose.model('message', messageSchema);

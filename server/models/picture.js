var mongo = require('mongoose');

var pictureSchema = new mongo.Schema({
    id:String,
    name:String,
    description:String
})

module.exports = mongo.model('Picture',pictureSchema);

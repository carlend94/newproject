const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    auto: {
        type: String,
        index: true
    },
    whatBroke: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    }
} , {collection: 'bid'});

var Bid = module.exports = mongoose.model("Bid", userSchema);
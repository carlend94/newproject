const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    auto: {
        type: String,
        index: true
    },
    model: {
        type: String
    },
    years: {
        type: String
    },
    whatBroke: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
} , {collection: 'bid'});

var Bid = module.exports = mongoose.model("Bid", userSchema);
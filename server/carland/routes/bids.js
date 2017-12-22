var express = require('express');
var router = express.Router();
var Bid = require('../models/bid');

router.get('/bid', function(req, res) {
    res.send('hey');
});

router.post('/bid', function(req, res) {
    var newBid = new Bid({
        auto: req.body.auto,
        whatBroke: req.body.whatBroke,
        phone: req.body.phone,
        email: req.body.email
    });
    newBid.save();
    res.sendStatus(200);
});

module.exports = router;
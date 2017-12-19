var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */

router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/login', function(req, res) {
    // res.render('login');
    res.send('hello');
});

router.post('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    // Validation

    req.checkBody('username', 'Name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(req.body.password);
    var errors = req.validationErrors();

    if(errors) {
        console.log('one field is empty')
    } else {
       var newUser = new User({
           username: username,
           password: password
       });
        User.createUser(newUser, function(err, user) {
            if(err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are register and now login');
    }
});



module.exports = router;

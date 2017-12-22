var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var jwt = require('jwt-simple');
/* GET users listing. */
var app = express();
var moment = require('moment');

router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/register', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    // var password2 = req.body.password2;


    // Validation
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    // req.checkBody('password2', 'Password do not match').equals(req.body.password);
    var errors = req.validationErrors();

    if(errors) {
        console.log('one field is empty')
    } else {
       var newUser = new User({
           email: email,
           password: password
       });
        User.createUser(newUser, function(err, user) {
            if(err) throw err;
            res.json({user: req.body.email});
        });

        req.flash('success_msg', 'You are register and now login');
    }
});

passport.use(new LocalStrategy(
    function(email, password, done) {
     User.getUserByEmail(email, function(err, user) {
         if(err) throw err;
         if(!user) {
             return  done(null, false, {message: 'Unknown User'});
         }

         User.comparePassword(password, user.password, function(err, isMatch) {
             if(err) throw err;
             if(isMatch) {
                 return done(null, user);
             } else {
                 return done(null, false, {message: 'Invalid Password'})
             }
         })
     });
    }));

passport.serializeUser(function(user, done) {
 done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   User.getUserById(id, function(err, user) {
       done(err, user);
   }) ;
});


router.post('/login',
    passport.authenticate('local',{ successFlash: 'Welcome!' }),
    function(req, res) {
        var expires = moment().add(7,'days').valueOf();
        var payload = { foo: req.body.username };
        var token = jwt.encode(payload, expires.toString());
        //here you can send user token;
        res.json({
            name: req.body.username,
            token : token,
            expire: expires
        });
    });



module.exports = router;

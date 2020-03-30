var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./../schemas/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// add a user
router.route('/AddUser').post(function(req,res) {
 var user = new User();
 user.name = req.body.name;
 user.age = req.body.age;
 user.friendlist = req.body.friendlist;
 user.socialscore = req.body.socialscore;
 console.log(user)
 user.save(function(err) {
      if (err)
        res.send(err);
      res.send('User successfully added!');
  });
})

// add a dummy user your database
router.route('/AddDummyUser').post(function(req,res) {
 var user = new User();
 user.name = 'Christie Molloy';
 user.age = 24;
 user.friendlist = [];
 user.socialscore = 0;
 user.save(function(err) {
      if (err)
        res.send(err);
      res.send('User successfully added!');
  });
})

// add friend to your friend list array
router.route('/addfriend').post(function(req,res) {
  const doc = {
    $push: {friendlist:req.body.friend}
  }
  User.update({name: req.body.name}, doc , function(err, result) {
      if (err)
        res.send(err);
      res.send('User successfully updated!');
      console.log(doc)
    });
});

module.exports = router;

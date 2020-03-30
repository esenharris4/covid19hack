var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./../schemas/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.route('/insert').post(function(req,res) {
 var user = new User();
 user.name = 'Esen Harris';
 user.age = 24;
 user.friendlist = ['Christie Molloy', 'Felipe Silva'];
 user.socialscore = 10;
 user.save(function(err) {
      if (err)
        res.send(err);
      res.send('Expense successfully added!');
  });
})

module.exports = router;

var express = require('express');
var router = express.Router();
let users = require("../api/users")


/* GET users listing. */
router.post('/getQQinfo', function(req, res, next) {
  users.getQQinfo(req, res, next)
});

module.exports = router;

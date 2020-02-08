var express = require('express');
var router = express.Router();
let linkSql=require('../sql/linkSql')

/* GET users listing. */
router.post('/login', function(req, res, next) {
    let username=req.body.username
    let password=req.body.password
    let sql=`SELECT * FROM tbl_user where username="${username}" and password="${password}"`
    linkSql(sql,r=>{
        res.send(r);
    })
});
router.post('/signUp', function(req, res, next) {
    console.log(req.body)
    let userId=req.body.userId
    let username=req.body.username
    let password=req.body.password
    let name=req.body.name
    let sql=`INSERT INTO tbl_user(userId,username,password,name,grade) values ( ${userId},"${username}","${password}","${name}",1)`
    linkSql(sql,r=>{
        res.send(r);
    })
});

module.exports = router;

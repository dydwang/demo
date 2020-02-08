var express = require('express');
var router = express.Router();
let linkSql=require('../sql/linkSql')

/* GET users listing. */
router.post('/addPay', function(req, res, next) {
    let userId=req.body.userId
    let num=req.body.num
    let name=req.body.name
    let price=req.body.price
    let payId=req.body.payId
    let sql=`INSERT INTO tbl_pay(userId,num,price,name,payId) values ( ${userId},${num},${price},"${name}",${payId})`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/getPay', function(req, res, next) {
    let where=req.body.where
    let sql=`SELECT * FROM tbl_pay ${where}`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/selectPays', function(req, res, next) {
    let name=req.body.name
    let sql=`SELECT * FROM tbl_pay where name like "%${name}%"`
    linkSql(sql,r=>{
        res.send(r);
    })
});

module.exports = router;

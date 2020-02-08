var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/mysql', function(req, res, next) {
    res.render('mysql');

});

router.get('/getFiles', function(req, res, next) {
    fs.readdir('sql/table', function (err, files) {
        if (err) {
            return console.log('目录不存在'+err)
        }
        let createTable=files.map((val,index)=>{
            return {
                tableName:val,
                create:require('../sql/table/'+val)
            }
        })
        res.send(createTable);
    })
});

router.get('/operation', function(req, res, next) {
    let linkSql=require('../sql/linkSql')
    let sql=req.query.sql
    linkSql(sql,r=>{
        res.json(r)
    })
});

module.exports = router;

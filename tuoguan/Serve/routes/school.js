var express = require('express');
var router = express.Router();
let linkSql=require('../sql/linkSql')

/* GET users listing. */
router.post('/schoolCreate', function(req, res, next) {
    let schoolId=req.body.schoolId
    let schoolName=req.body.schoolName
    let schoolPhone=req.body.schoolPhone
    let schoolGrade=req.body.schoolGrade
    let schoolAddress=req.body.schoolAddress
    let schoolCourse=req.body.schoolCourse
    let schoolPrice=req.body.schoolPrice
    let schoolMain=req.body.schoolMain


    let sql=`INSERT INTO tbl_school(schoolId,schoolName,schoolPhone,schoolGrade,schoolAddress,schoolCourse,schoolPrice,schoolMain) values ( ${schoolId},"${schoolName}","${schoolPhone}","${schoolGrade}","${schoolAddress}","${schoolCourse}",${schoolPrice},"${schoolMain}")`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/getSchool', function(req, res, next) {
    let sql=`SELECT * from tbl_school`
    linkSql(sql,r=>{
        res.send(r);
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
let linkSql=require('../sql/linkSql')

/* GET users listing. */
router.post('/updateUser', function(req, res, next) {
  let userId=req.body.userId
  let password=req.body.password
  let name=req.body.name
  let sql=`UPDATE tbl_user SET password="${password}", name="${name}" where userId=${userId}`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/getUser', function(req, res, next) {
  let sql=`SELECT * FROM tbl_user where grade = '1'`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/addTeacher', function(req, res, next) {
  let teacherId=req.body.teacherId
  let age=req.body.age
  let course=req.body.course
  let name=req.body.name
  let phone=req.body.phone
  let salary=req.body.salary
  let school=req.body.school
  let status=req.body.status

  let sql=`INSERT INTO tbl_teacher(teacherId,age,course,name,phone,salary,school,status) values( ${teacherId},"${age}","${course}","${name}","${phone}","${salary}",${school},"${status}")`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/getTeacher', function(req, res, next) {
  let where=req.body.where
  let sql=`SELECT * FROM tbl_teacher ${where}`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/changeTeacherStatus', function(req, res, next) {
  let status=req.body.status
  let teacherId=req.body.teacherId
  let sql=`UPDATE tbl_teacher SET status="${status}" where teacherId=${teacherId}`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/updateTeacher', function(req, res, next) {
  let teacherId=req.body.teacherId
  let age=req.body.age
  let course=req.body.course
  let name=req.body.name
  let phone=req.body.phone
  let salary=req.body.salary
  let school=req.body.school
  let sql=`UPDATE tbl_teacher SET age="${age}" ,course="${course}" ,name="${name}" ,phone="${phone}" ,salary="${salary}" ,school=${school} where teacherId=${teacherId}`
  linkSql(sql,r=>{
    res.send(r);
  })
});

router.post('/selectTeacher', function(req, res, next) {
  let name=req.body.name
  let sql=`SELECT * FROM tbl_teacher where name like "%${name}%"`
  linkSql(sql,r=>{
    res.send(r);
  })
});
module.exports = router;

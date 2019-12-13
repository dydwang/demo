import {util} from "./util";

let course={}

/**
 * course  课程
 * */
let src='course'
course.createCourse=function(data,callback) {
    util(data,src+'/createCourse',callback,)
}

course.getCourse=function(data,callback) {
    util(data,src+'/getCourse',callback,)
}

course.selectCourse_courseId=function(data,callback) {
    util(data,src+'/selectCourse_courseId',callback,)
}

course.selectCourse_openId=function(data,callback) {
    util(data,src+'/selectCourse_openId',callback,)
}

course.selectCourse_courseName=function(data,callback) {
    util(data,src+'/selectCourse_courseName',callback,)
}

course.deleteCourse=function(data,callback) {
    util(data,src+'/deleteCourse',callback,)
}


course.addClick=function(data,callback) {
    util(data,src+'/addClick',callback,)
}


/**
 * 加入课程
 * */
let src1='joinCourse'
course.addJoinCourse=function(data,callback) {
    util(data,src1+'/addJoinCourse',callback,)
}

course.getJoinCourse_openId=function(data,callback) {
    util(data,src1+'/getJoinCourse_openId',callback,)
}

course.getJoinCourse_courseId=function(data,callback) {
    util(data,src1+'/getJoinCourse_courseId',callback,)
}

course.getJoinCourse=function(data,callback) {
    util(data,src1+'/getJoinCourse',callback,)
}
export default course
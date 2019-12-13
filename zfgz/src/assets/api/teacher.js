import {util} from './util'

let teacher={}
let src='teacher'
teacher.createTeacher=function(data,callback) {
    util(data,src+'/createTeacher',callback)
}

teacher.getTeacher=function(data,callback) {
    util(data,src+'/getTeacher',callback)
}

teacher.updateTeacher=function(data,callback) {
    util(data,src+'/updateTeacher',callback)
}
teacher.selectTeacher=function(data,callback) {
    util(data,src+'/selectTeacher',callback)
}

teacher.examineTeacher=function(data,callback) {
    util(data,src+'/examineTeacher',callback)
}
export default teacher
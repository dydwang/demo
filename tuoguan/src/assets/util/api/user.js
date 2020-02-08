import {util} from '../util.js'

let user={}
let src='users' //当前接口文件夹
user.getUser=function(data,callback) {
    util(data,src+'/test',callback)
}
user.updateUser=function(data,callback) {
    util(data,src+'/updateUser',callback)
}

user.getUser=function(data,callback) {
    util(data,src+'/getUser',callback)
}

user.addTeacher=function(data,callback) {
    util(data,src+'/addTeacher',callback)
}

user.getTeacher=function(data,callback) {
    util(data,src+'/getTeacher',callback)
}
user.changeTeacherStatus=function(data,callback) {
    util(data,src+'/changeTeacherStatus',callback)
}

user.updateTeacher=function(data,callback) {
    util(data,src+'/updateTeacher',callback)
}

user.selectTeacher=function(data,callback) {
    util(data,src+'/selectTeacher',callback)
}


export default user

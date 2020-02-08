import {util} from '../util.js'

let login={}
let src='course' //当前接口文件夹
login.upVideo=function(data,callback) {
    util(data,src+'/upVideo',callback)
}

login.createVideo=function(data,callback) {
    util(data,src+'/createVideo',callback)
}

login.getVideo=function(data,callback) {
    util(data,src+'/getVideo',callback)
}

login.getVideos=function(data,callback) {
    util(data,src+'/getVideos',callback)
}

login.createCourse=function(data,callback) {
    util(data,src+'/createCourse',callback)
}

login.getCourse=function(data,callback) {
    util(data,src+'/getCourse',callback)
}

login.updateCourse=function(data,callback) {
    util(data,src+'/updateCourse',callback)
}

login.updateVideo=function(data,callback) {
    util(data,src+'/updateVideo',callback)
}

login.createNews=function(data,callback) {
    util(data,src+'/createNews',callback)
}
login.getNews=function(data,callback) {
    util(data,src+'/getNews',callback)
}
login.deNew=function(data,callback) {
    util(data,src+'/deNews',callback)
}
export default login

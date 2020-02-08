import {util} from '../util.js'

let login={}
let src='school' //当前接口文件夹
login.schoolCreate=function(data,callback) {
    util(data,src+'/schoolCreate',callback)
}
login.getSchool=function(data,callback) {
    util(data,src+'/getSchool',callback)
}

export default login

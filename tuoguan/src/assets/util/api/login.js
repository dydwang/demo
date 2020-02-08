import {util} from '../util.js'

let login={}
let src='login' //当前接口文件夹
login.login=function(data,callback) {
    util(data,src+'/login',callback)
}
login.signUp=function(data,callback) {
    util(data,src+'/signUp',callback)
}

export default login

import {util} from '../util.js'

let login={}
let src='pay' //当前接口文件夹
login.addPays=function(data,callback) {
    util(data,src+'/addPay',callback)
}
login.getPays=function(data,callback) {
    util(data,src+'/getPay',callback)
}

login.selectPays=function(data,callback) {
    util(data,src+'/selectPays',callback)
}


export default login

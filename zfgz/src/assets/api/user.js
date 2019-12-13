import {util} from './util'

let user={}
let src='users'
user.getUser=function(data,callback) {
    util(data,src+'/getQQinfo',callback,'node')
}

user.getGrade=function(data,callback) {
    util(data,src+'/getGrade',callback)
}



user.changeGard=function(data,callback) {
    util(data,src+'/changeGard',callback)
}

user.createUsers=function(data,callback) {
    util(data,src+'/createUsers',callback)
}

export default user
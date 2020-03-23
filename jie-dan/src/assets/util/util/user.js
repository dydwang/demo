import {util} from './util.js'
function add(table,data){
    return {
        $table:table,
        $method:'add',
        $insert:data
    }
}

function up(table,data,where={ids:data.ids}){
    return {
        $table:table,
        $method:'up',
        $where:data.$where||where,
        $set:data.$set
    }
}
function get(table,data){
    return {
        $table:table,
        $method:'get',
        $where:data.$where,
        $link:data.$link,
        $orderBY:data.$orderBY,
        $like:data.$like,
    }
}

function del(table,data){
    return{
        $table:table,
        $method:'del',
        $where:data,
    }
}
let user={}
let src='users/' //当前接口文件夹

let tableUser='pdf'
user.getPdf=function(data,callback) {
    util(get(tableUser,data),src,callback)
}
user.addPdf=function(data,callback) {
    util(add(tableUser,data),src,callback)
}
user.updatePdf=function(data,callback) {
    util(up(tableUser,data),src,callback)
}
user.delPdf=function(data,callback) {
    util(del(tableUser,data),src,callback)
}

export default user

import {util} from './util'

let section={}
let src='section'


section.createSection=function(data,callback) {
    util(data,src+'/createSection',callback)
}
section.getSection=function(data,callback) {
    util(data,src+'/getSection',callback)
}

section.deleteSection=function(data,callback) {
    util(data,src+'/deleteSection',callback)
}


export default section
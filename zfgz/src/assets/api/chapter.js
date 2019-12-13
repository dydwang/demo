import {util} from './util'

let chapter={}
let src='chapter'

chapter.createChapter=function(data,callback) {
    util(data,src+'/createChapter',callback)
}
chapter.getChapter=function(data,callback) {
    util(data,src+'/getChapter',callback)
}

chapter.deleteChapter=function(data,callback) {
    util(data,src+'/deleteChapter',callback)
}


export default chapter
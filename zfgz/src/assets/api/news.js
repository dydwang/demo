import {util} from './util'

let news={}
let src='news'

news.createNews=function(data,callback) {
    util(data,src+'/createNews',callback)
}

news.getNews=function(data,callback) {
    util(data,src+'/getNews',callback)
}
news.deleteNews=function(data,callback) {
    util(data,src+'/deleteNews',callback)
}
export default news
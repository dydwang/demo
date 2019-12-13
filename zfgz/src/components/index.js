import comTitle from './comTitle.vue';//公司标题
import userImage from './userImage.vue';//用户头像

const nextPage  = ()=>import('./nextPage.vue')//公司标题
const signIn  = ()=>import('./signIn.vue')//公司标题
const course  = ()=>import('./course.vue')//视频框
const scrollCourse  = ()=>import('./scrollCourse.vue')//无限加载
const upVideo  = ()=>import('./upVideo.vue')//上传视频
const upImg  = ()=>import('./upImg.vue')//上传图片
const upPdf  = ()=>import('./upPdf.vue')//上传PDF

const publicTitle={
    install:function(Vue) {
        Vue.component('comTitle', comTitle),
        Vue.component('nextPage', nextPage),
        Vue.component('signIn', signIn),
        Vue.component('userImage', userImage),
        Vue.component('course', course),
        Vue.component('scrollCourse', scrollCourse),
        Vue.component('upVideo', upVideo),
        Vue.component('upImg', upImg)
        Vue.component('upPdf', upPdf)
    }
}
export default publicTitle;
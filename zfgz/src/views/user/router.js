const company  = ()=>import('./company/index')
const teacherInfo  = ()=>import('./teacher/teacherInfo')
const teacherList  = ()=>import('./teacher/teacherList')
const course  = ()=>import('./course/index')
const courseDetails  = ()=>import('./course/courseDetails/courseDetails')
const personal  = ()=>import('./personal/index')
const news  = ()=>import('./news/index')
const newsInfo  = ()=>import('./news/info')

const recruit  = ()=>import('../recruit')
import person from './personal/router'
let routes=[
    {
        path:'/company',
        name:'公司介绍',
        component:company
    },
    {
        path:'/course',
        name:'课程学习',
        component:course
    },
    {
        path:'/personal',
        name:'个人页面',
        component:personal,
        children:[
            ...person
        ]
    },
    {
        path:'/news',
        name:'新闻资讯',
        component:news
    },
    {
        path:'/newsInfo',
        name:'新闻资讯',
        component:newsInfo
    },
    {
        path:'/courseDetails',
        name:'课程详情',
        component:courseDetails
    },
    {
        path:'/teacherList',
        name:'教师列表',
        component:teacherList
    },
    {
        path:'/teacherInfo',
        name:'教师信息',
        component:teacherInfo
    },
    {
        path:'/recruit',
        name:'招聘',
        component:recruit
    },
]

let ROUTES=routes

export default ROUTES

const grade  = ()=>import('./grade/grade')
const history  = ()=>import('./history/history')
const information  = ()=>import('./information/information')
const upload  = ()=>import('./upload/upload')
const myCourse  = ()=>import('./course/course')
const manageVideo  = ()=>import('./manageVideo/manageVideo')
let routes=[
    {
        icon:'el-icon-menu',
        path:'/information',
        name:'个人信息',
        component:information
    },
    {
        icon:'el-icon-menu',
        path:'/myCourse',
        name:'加入课程',
        component:myCourse
    },
    // {
    //     icon:'el-icon-menu',
    //     path:'/history',
    //     name:'观看记录',
    //     component:history
    // },
    {
        icon:'el-icon-menu',
        path:'/upload',
        name:'上传课程',
        component:upload
    },
    {
        icon:'el-icon-menu',
        path:'/grade',
        name:'上传权限',
        component:grade
    },
    {
        icon:'el-icon-menu',
        path:'/manageVideo',
        name:'管理视频',
        component:manageVideo
    },
]
let ROUTES=routes

export default ROUTES


let menu=[
    {
        path:'/',
        name:'新闻',
        icon:'zf-icon-news',
        children:[
            {
                path:'/admin_newsTbles',
                name:'新闻',
                icon:'el-icon-eleme',
                children:[]
            },
            {
                path:'/admin_createNews',
                name:'创建新闻',
                icon:'el-icon-eleme',
                children:[]
            },
        ]
    },
    {
        path:'/',
        name:'学校',
        icon:'zf-icon-news',
        children:[
            {
                path:'/admin_tableSchool',
                name:'学校',
                icon:'el-icon-eleme',
            },
            {
                path:'/admin_createSchool',
                name:'创建学校',
                icon:'el-icon-eleme',

            },

        ]
    },
    {
        path:'/',
        name:'课程',
        icon:'zf-icon-news',
        children:[

            {
                path:'/admin_tableCourse',
                name:'课程',
                icon:'el-icon-eleme',
            },
            {
                path:'/admin_createCourse',
                name:'创建课程',
                icon:'el-icon-eleme',
            },
        ]
    },

    {
        path:'/',
        name:'用户',
        icon:'zf-icon-news',
        children:[
            {
                path:'/admin_tableUser',
                name:'用户',
                icon:'el-icon-eleme',
            },
            {
                path:'/admin_tableTeacher',
                name:'教师',
                icon:'el-icon-eleme',
            },

        ]},
    {
        path:'/admin_payTable',
        name:'订单',
        icon:'el-icon-eleme',
        children:[]
    },
    {
        path:'/admin_recruit',
        name:'招聘',
        icon:'el-icon-eleme',
        children:[]
    },

]

export default menu
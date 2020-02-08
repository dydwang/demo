import admin from '../views/admin/index'
import newsTbles from '../views/admin/news/table'
import createNews from '../views/admin/news/createNew'

import createSchool from '../views/admin/school/create'
import tableSchool from '../views/admin/school/table'

import tableCourse from '../views/admin/course/table'
import createCourse from '../views/admin/course/create'

import tableUser from '../views/admin/user/user'
import tableTeacher from '../views/admin/user/teacher'

import recruit from '../views/admin/recruit/recruit'
import payTable from '../views/admin/pay/pay'
import login from '../views/admin/login'
const routes = [
    {
        path:'/adminIndex',
        name:'管理员',
        icon:'zf-icon-news',
        component:admin,
        children:[

                    {
                        path:'/admin_newsTbles',
                        name:'新闻表格',
                        icon:'el-icon-eleme',
                        component:newsTbles,

                    },
                    {
                        path:'/admin_createNews',
                        name:'创建新闻',
                        icon:'el-icon-eleme',
                        component:createNews,

                    },
            {
                path:'/admin_createSchool',
                name:'创建学习',
                icon:'el-icon-eleme',
                component:createSchool,

            },
            {
                path:'/admin_tableSchool',
                name:'学校表格',
                icon:'el-icon-eleme',
                component:tableSchool,

            },
            {
                path:'/admin_tableCourse',
                name:'创建课程',
                icon:'el-icon-eleme',
                component:tableCourse,

            },
            {
                path:'/admin_createCourse',
                name:'课程表格',
                icon:'el-icon-eleme',
                component:createCourse,

            },
            {
                path:'/admin_payTable',
                name:'订单',
                icon:'el-icon-eleme',
                component:payTable,

            },
            {
                path:'/admin_tableTeacher',
                name:'教师',
                icon:'el-icon-eleme',
                component:tableTeacher,

            },
            {
                path:'/admin_tableUser',
                name:'用户',
                icon:'el-icon-eleme',
                component:tableUser,

            },
            {
                path:'/admin_recruit',
                name:'订单',
                icon:'el-icon-eleme',
                component:recruit,

            },
        ]
    },
    {
        path:'/admin_login',
        name:'登陆',
        icon:'el-icon-eleme',
        component:login,

    },
]
export default routes
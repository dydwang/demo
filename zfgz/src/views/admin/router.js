const login  = ()=>import('./login')
const adminView  = ()=>import('./index')

const course  = ()=>import('./view/course/index')


const news  = ()=>import('./view/news/index')
const news_table  = ()=>import('./view/news/table')
const news_create  = ()=>import('./view/news/create')
const news_Info  = ()=>import('./view/news/info')


const teacher  = ()=>import('./view/teacher/index')
const teacher_table  = ()=>import('./view/teacher/table')
const teacher_examine  = ()=>import('./view/teacher/examine')
let routes=[
    {
        path:'/adminView_login',
        name:'登陆',
        component:login
    },
    {
        path:'/adminView_adminView',
        name:'admin主要页面',
        component:adminView,
        children:[
            {
                path:'/adminView_course',
                name:'课程管理',
                component:course,
                children:[]
            },
            {
                path:'/adminView_news',
                name:'新闻管理',
                component:news,
                children:[
                    {
                        path:'/adminView_news_table',
                        name:'新闻表格',
                        component:news_table,
                        children:[]
                    },
                    {
                        path:'/adminView_news_create',
                        name:'创建新闻',
                        component:news_create,
                        children:[]
                    },
                    {
                        path:'/adminView_news_Info',
                        name:'新闻',
                        component:news_Info,
                        children:[]
                    },
                ]
            },
            {
                path:'/adminView_teacher',
                name:'教师管理',
                component:teacher,
                icon:'el-icon-eleme',
                children:[
                    {
                        path:'/adminView_teacher_table',
                        name:'教师表格',
                        component:teacher_table,
                        children:[]
                    },
                    {
                        path:'/adminView_teacher_examine',
                        component:teacher_examine,
                        name:'审核',
                        children:[]
                    },
                ]
            },
        ]
    },
]
let ROUTES=routes[1].children
ROUTES.forEach((val,index,arr)=>{
    arr[index].meta={
       admin:true
    }
    if(val.children.length>0){
        val.children.forEach((v,i,a)=>{
            a[i].meta={
                admin:true
            }
        })
    }
})
export default routes

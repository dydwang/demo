import person from '../views/user/person/index.vue'
import perRouter from '../views/user/person/router.js'
import home from '../views/user/home/index'
import schoolView from '../views/user/home/schoolView'

import news from '../views/user/news/index'
import newsInfo from '../views/user/news/info'

import video from '../views/user/video/index'
import videoView from '../views/user/video/videoView'

import recruit from '../views/user/recruit/recruit'
const routes = [
    {
        path: '/user_home',
        name: 'home',
        component: home,
    },
    {
        path: '/schoolView',
        name: 'schoolView',
        component: schoolView,
    },


    {
        path: '/news',
        name: 'news',
        component: news,
    },
    {
        path: '/newsInfo',
        name: 'newsInfo',
        component: newsInfo,
    },
    {
        path: '/video',
        name: 'video',
        component: video,
    },
    {
        path: '/videoView',
        name: 'videoView',
        component: videoView,
    },
    {
        path: '/person',
        name: 'person',
        component: person,
        children:[
            ...perRouter,

        ]
    },
    {
        path: '/recruit',
        name: 'recruit',
        component: recruit,
    },
]
export default routes
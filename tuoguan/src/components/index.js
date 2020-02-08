
import userImage from './userImage.vue';//用户头像
import headMenu from './headMenu'
import Login from './Login'
import SignUp from './SignUp'
import suspension from './suspension'

import adminMenu from './menuAdmin/index'
const publicTitle={
    install:function(Vue) {
        Vue.component('userImage', userImage),
        Vue.component('headMenu', headMenu),
        Vue.component('Login', Login),
        Vue.component('SignUp', SignUp),
        Vue.component('suspension', suspension),
            Vue.component('adminMenu', adminMenu)

    }
}
export default publicTitle;
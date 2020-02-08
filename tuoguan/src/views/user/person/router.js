import shop from './shop/index.vue'
import order from './order/index.vue'
import updateUser from './updateInfo.vue'

const routes = [
    {
        path: '/user_shop',
        name: '购物车',
        component: shop
    },
    {
        path: '/user_order',
        name: '我的订单',
        component: order
    },
    {
        path: '/updateUser',
        name: '修改信息',
        component: updateUser
    },
]
export default routes
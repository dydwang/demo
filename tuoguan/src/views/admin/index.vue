<template>
    <div id="box">
        <admin-menu menuText="托管中心后台系统" :menuList="menuList" :asideWidth="200" >

            <div slot="menu-ele"><el-button type="danger" @click="backLogins" size="mini" style="position: fixed;right: 30px;top:20px">退出登陆</el-button></div>
            <div slot="main">
                <router-view></router-view>
            </div>
        </admin-menu>
    </div>
</template>

<script>
    import menuList from './menu'
    export default {
        name: "index",
        props: [''],
        data() {
            return {
                menuList:menuList,
            }
        },
        methods: {
            backLogins(){
                sessionStorage.setItem('adminInfo', '')
                this.$router.push('/admin_login')
            }
        },
        mounted() {
            let adminInfo=sessionStorage.getItem('adminInfo')
            if(!adminInfo||adminInfo==='') this.$router.push('/admin_login');
            console.log(adminInfo)
        },
        created() {

        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
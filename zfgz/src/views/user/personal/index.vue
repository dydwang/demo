<template>
    <div id="personal">
        <el-container>
            <el-aside width="200px">

                    <div class="headImg">

                        <div class="center">
                            <user-image width="100px" height="100px" border-radius="50px" style="margin-top: 30px"></user-image>
                        </div>
                        <div class="center" style="margin-top: 10px;color: #111">
                            {{$userInfo.nickname}}
                        </div>
                    </div>

                <div class="menu">
                    <el-menu
                            :default-active="activeIndex"
                            @select="handleSelect"
                            class="el-menu-vertical-demo">
                        <el-menu-item v-for="(item,index) in menuList" :key="index" :index="(index+1).toString()">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import router from "./router"
    export default {
        name: "index",
        data(){
            return{
                menuList:router,
                activeIndex:sessionStorage.getItem('leftMenu')
            }
        },
        methods:{
            handleSelect(key, keyPath) { //点击菜单

                this.$resetSetItem('leftMenu', key);
                this.toPath()
            },
            toPath(){  //跳转页面
                //记忆刷新前跳转到哪儿
                let activeIndex=sessionStorage.getItem('leftMenu')===null?'1':sessionStorage.getItem('leftMenu')
                this.activeIndex=activeIndex
                let path=this.menuList[parseInt(activeIndex)-1].path
                let nowPath=this.$router.history.current.fullPath
                if(nowPath!==path){
                    this.$router.push({path:path})//记忆跳转
                }
            },
        },
        mounted() {
            //跳转页面
            this.toPath()

        },
        created () {
            window.addEventListener('setItem', ()=> {
                let activeIndex=sessionStorage.getItem('leftMenu')
                this.activeIndex=activeIndex
            })
            if(this.$userInfo===null){
                this.$router.push('/')
            }

        },
    }
</script>

<style scoped lang="scss">
    #personal{
        margin-top: 20px;
        .el-aside{
            margin-right:  20px;
            background-color: #f8f8f8;
        }
        .el-main{
            padding: 0;
        }
        .headImg{
            height: 180px;
            .center{
                margin: 0 auto;text-align: center
            }
        }
        .menu{
            .el-menu{
                background-color: #f8f8f8;
                border: 0;
                .el-menu-item [class^=el-icon-]{
                    margin-right: 10px;
                }
            }
        }

    }
</style>
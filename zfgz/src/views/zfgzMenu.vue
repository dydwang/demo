<template>
    <div id="zfgzMenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,index) in menuList" :key="index" :index="(index+1).toString()" v-if="index!==3">{{item.name}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "zfgzMenu",
        data(){
            return{
                activeIndex: sessionStorage.getItem('activeIndex'),
                menuList:[
                    {name:'公司介绍',path:'/company'},{name:'新闻资讯',path:'/news'},{name:'课程视频',path:'/course'},{name:'个人界面，',path:'/personal'},
                ]
            }
        },
        methods:{
            handleSelect(key, keyPath) { //点击菜单
                this.$resetSetItem('activeIndex', key);
                this.toPath()
            },
            toPath(){  //跳转页面
                //记忆刷新前跳转到哪儿
                let activeIndex=sessionStorage.getItem('activeIndex')===null?'1':sessionStorage.getItem('activeIndex')
                this.activeIndex=activeIndex

                let path=this.menuList[parseInt(activeIndex)-1].path

                let nowPath=this.$router.history.current.fullPath
                if(nowPath!==path){
                    this.$router.push({path:path})//记忆跳转
                }

            },
            changeIndex(val){
                this.activeIndex=val
            }
        },
        mounted() {
            //跳转页面
            //this.toPath()
        },
        created () {
            window.addEventListener('setItem', ()=> {
                let activeIndex=sessionStorage.getItem('activeIndex')
                this.activeIndex=activeIndex
            })
        },
    }
</script>

<style scoped lang="scss">
    #zfgzMenu{

        float: right;
        .el-menu{
            float: right;
            width: 288px;
            margin: 0 20px 0 0;
            .el-menu-item{
                height: 60px !important;
                line-height: 70px;
            }
        }
        .el-menu.el-menu--horizontal{
            border: 0;
        }
    }
</style>
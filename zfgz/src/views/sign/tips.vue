<template>
    <div id="popover">
        <!--
        v-if="this.$userInfo!==null"
        -->
        <div id="already" v-if="this.$userInfo!==null">
            <el-row style="overflow: hidden;">
                <el-col :span="6"> <user-image width="30px" height="30px"></user-image></el-col>
                <el-col :span="18" style="line-height: 30px;height: 18px">{{$userInfo.nickname}}</el-col>
            </el-row>
            <div v-for="(item,index) in already" :key="index" class="fun">
                <el-divider v-if="index===already.length-1"></el-divider>
                <el-link :underline="false" @click="toPersonal(item.path,(index+1).toString())">{{item.text}}</el-link>
            </div>
        </div>
        <div id="not" v-else>
            <div id="title">登陆后可享</div>
            <div>
                <el-row style="margin: 10px 20px" v-for="(item,index) in icon" :key="index">
                    <el-col :span="4" :offset="2" style="line-height: 19px;font-size: 16px;margin-top: 1.5px;color:#66b1ff;font-weight: 600" :class="item.class">
                    </el-col>
                    <el-col :span="18" style="font-weight: 600">
                        {{item.text}}
                    </el-col>
                </el-row>
            </div>
            <div>
                <el-row style="margin-top: 20px">
                    <el-col :span="8" :offset="2" >
                        <el-button round size="mini" type="primary" @click="login">登陆</el-button>
                    </el-col>
                    <el-col :span="8" :offset="2">
                        <el-button round size="mini" @click="login">注册</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tips",
        data(){
            return{
                icon:[{class:"el-icon-eleme",text:'精品课程'}, {class:"el-icon-time",text:'观看历史记录'},],
                already:[{text:'个人信息',path:'/information'},{text:'我的课程',path:'/myCourse'},{text:'切换账号',path:''}]
            }

        },
        methods:{
            toPersonal(path,key){
               if(path===''){
                   this.$login()
               }else{
                   let nowPath=this.$router.history.current.fullPath
                   if(nowPath!==path){
                       this.$router.push({path:path})//记忆跳转
                       this.$resetSetItem('activeIndex', '4');
                       this.$resetSetItem('leftMenu', key);
                       this.$router.push(path)
                   }
               }
            },
            login(){
                this.$login()
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
    #popover{
        #not{
            #title{
                align-content: center;
                text-align: center;
                font-size: 16px;
            }
        }
        #already{
            .fun{
                margin-top: 15px;
                text-align: center;
                &>*{
                    font-weight: 600;
                }
            }
            .el-divider--horizontal{
                margin: 15px 0;
            }
        }
    }
</style>
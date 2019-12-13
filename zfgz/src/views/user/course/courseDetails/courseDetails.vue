<template>
    <div id="video">
        <div class="title">
            <div style="margin-left: 20px">
                {{videoName}}
            </div>
        </div>
        <div class="left">
            <myVideo v-if="videoPath" :src="videoPath" :imagePath="item.imagePath"></myVideo>
        </div>
        <div class="right" >
            <videoMenu :purchase="purchase" :item="item" :courseId="item.courseId" @look="look"></videoMenu>
        </div>
        <div class="foot">
            <div  style="width:75%;height: 60px;">
                <div style="margin-left: 20px">
                    {{item.courseName}}
                </div>
                <div id="fun" style="margin-left: 20px">
                    <div>{{item.clickNum}}次学习</div>
                    <div style="margin-left: 20px" v-if="item.courseCharge==='false'">可免费学习{{item.freeNode}}节</div>
                    <div style="color: crimson;margin-left: 20px">{{item.courseCharge==='true'?'免费':'￥'+item.coursePrice}}</div>
                </div>
            </div>
            <div style="width: 25%;float: left;">
                <div style="padding: 5px 10px;width: auto">
                    <el-button type="primary" class="el-icon-plus" v-if="item.courseCharge==='true'&&purchase" @click="join">免费报名</el-button>
                    <el-button type="primary" class="el-icon-plus"  v-else-if="purchase" @click="dialogVisible=true">购买</el-button>
                    <el-button type="primary"  v-else>已加入课程</el-button>
                </div>
            </div>
        </div>
        <el-dialog
                title="购买"
                :visible.sync="dialogVisible"
                width="30%">
            <user-image></user-image>购买后联系客服获取购买码
            <el-input  v-model="input" placeholder="请输入购买码" style="margin-bottom: 10px"></el-input>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="goumai()">确 定</el-button>
        </el-dialog>
    </div>
</template>

<script>
    //const leftHeight=document.getElementsByClassName("left")[0].offsetHeight
    const crypto = require('crypto');
    import myVideo from './video'
    import videoMenu from './videoMenu'
    export default {
        name: "courseDetails",
        data(){
            return{
                item:'',
                videoPath:false,
                videoName:'',
                purchase:true,//如果收费 判断是否需购买
                dialogVisible:false,//弹框
                input:'',//购买码
            }
        },
        components:{
            myVideo,videoMenu
        },
        methods:{
            look(videoPath,videoName){
                this.videoPath=false
                setTimeout(()=>{
                    this.videoName=videoName
                    this.videoPath=videoPath
                },0)
            },
            getJoinCourse(){
                //if(this.item.courseCharge==='false'){
                    let c={
                        openId:this.$userInfo.openId,
                        courseId:this.item.courseId
                    }
                    this.$api.getJoinCourse(c,res=>{
                        if(res[0].openId){
                            this.purchase=false
                        }
                    })
                //}
            },
            join(){
                let c={
                    openId:this.$userInfo.openId,
                    courseId:this.item.courseId
                }
                this.$api.addJoinCourse(c,res=>{
                    if(res){
                        this.purchase=false
                    }
                })
            },
            goumai(){
                if(this.input===this.cryptoJs(this.item.courseId)){
                    this.join()
                    this.$message.success('购买成功')
                    this.dialogVisible=false
                }else{
                    this.$message('购买码错误')
                }

            },
            cryptoJs(courseId){
                const now=Date.now()
                const secret = this.$allFun.getTime(now)+new Date(now).getHours()+(parseInt((new Date(now).getMinutes()/3).toFixed(0)));
                return crypto.createHmac('sha256', secret)
                    .update(courseId)
                    .digest('hex');

            },
        },
        mounted(){
            this.$api.addClick({courseId:this.item.courseId})
        },
        created() {
            /**如果没有选中视频 跳转到选择视频主页*/
            let query=this.$route.query
            if(!query){
                this.$router.push('/course')
            }else{
                this.item=query
            }
            this.getJoinCourse()
        }
    }
</script>

<style scoped lang="scss">
#video{
    width: 100%;
    height: 100%;
    &>div{
        float: left;
    }
    .title{
        width: 100%;
        height: 30px;
        background: #1d1d1d;
        background: rgba(29,29,29,.8);
        font-size: 14px;
        line-height: 30px;
        color: #e4e4e4;
        position: relative;
        //top: 30px;
        z-index: 10;
    }
    .left{
        background-color: #232323;
        position: relative;
        top: -30px;
        width: 75%;

    }
    .right{
        float: right;
        width: 25%;
        background-color: #232323;
        color: #c7c7c7;
        position: relative;
        top: -30px;
        z-index: 0;
    }
    .foot{
        width: 100%;
        height: 60px;
        color:#FFFFFF;
        font-size: 24px;
        position: relative;
        top: -40px;
        background-color: #232323;
        padding-top: 10px;
        &>div{
            float: left;
        }
        #fun{
            width: 100%;
            margin-top: 5px;
            font-size: 12px;
            color: #909399;
            &>div{
                float: left;
            }
        }
        .el-button{
            width: 100%;
            border-radius:0;


        }
    }
}
</style>
<template>
    <div style="background-color: #f5f7fa;padding: 20px 5px 0 5px">
        <com-title text="师资情况"></com-title>
        <div id="box">
            <div class="myCard " >
                <el-card shadow="hover" class="mycard" style="float: left;"
                         :style="{marginLeft:(index===0?'0':'20px')}"
                         v-for="(item,index) in team" :key="index">
                    <div @click="toTeacherInfo(item)">
                        <div style="margin: 0 auto;text-align: center;">
                            <user-image width="100px" :src="item.imagePath" height="100px" border-radius="50px"></user-image>
                        </div>
                        <div style="margin: 0 auto;text-align: center;font-size: 12px;color:#564f4f">{{item.name}}</div>
                        <div style="width: 100%;height: 150px;font-size: 12px;color:#564f4f;overflow: hidden ">
                            <div >{{item.remarks}}</div>
                        </div>
                    </div>

                </el-card>
            </div>
            <div v-if="click" class="myButton myLeft" >
                <el-button :disabled="clickNum===0"  @click="moveCard('left')" type="primary" icon="el-icon-arrow-left" circle></el-button>
            </div>
            <div v-if="click" class="myButton myRight">
                <el-button :disabled="team.length-clickNum<=4"  @click="moveCard('right')" type="primary" icon="el-icon-arrow-right" circle></el-button>
            </div>
        </div>
    </div>
</template>

<script>
    window.chatTimer=''
    export default {
        name: "course",
        data(){
            return{
                team:[{},{},{},{}],
                mycardWidth:0,//card宽度
                myCardMove:0,//移动距离
                clickNum:0,//点击次数
                click:true,//每次只能点击一遍
            }
        },
        methods:{
            moveCard(move){  //点击左右按钮
                //防止多次点击
                this.click=false
                clearInterval(window.chatTimer)

                let c=move==='left'?'':'-'
                if(move==='left'){ //点击左按钮
                    this.clickNum--
                }else{this.clickNum++}//点击右键
                let myCard=document.getElementsByClassName("myCard")[0]
                let i=0//记录运行次数
                window.chatTimer = setInterval(() => {
                    i++
                    this.myCardMove+=parseFloat((c+(this.mycardWidth+20))/100)
                    myCard.style.left=this.myCardMove+'px'//移动myCard
                    if(i===100){
                        clearInterval(window.chatTimer);
                        this.click=true
                        }
                }, 5);
                console.log(this.clickNum)
            },
            setCardWidth(val){
                let mycard=document.getElementsByClassName("mycard")
                this.mycardWidth=parseFloat(val/4)
                for(let id=0;id< mycard.length;id++){
                    mycard[id].style.width=parseFloat(val/4)+'px'
                }
            },
            toTeacherInfo(item){
                //打开教师详情页面
                // this.$router.push({
                //     path:'/teacherInfo',
                //     query:item
                // })
            },
            selectTeacher(c){
                c.status='2'
                this.$api.selectTeacher(c,res=>{
                    this.team=res
                    this.$refs.nextPage.judge(res.length)
                })
            }
        },
        mounted() {
            let boxWidths=document.getElementById("box").offsetWidth-10-60
            this.setCardWidth(boxWidths)

            let c={
                count:10,
                offset:0,
                status:'0'
            }
            this.selectTeacher(c)
        },
        created() {
            window.onresize = () => {//监听网页宽度变化时
                return (() => {
                    let boxWidths=document.getElementById("box").offsetWidth-10-60
                    this.setCardWidth(boxWidths)
                })()
            }
        }
    }
</script>

<style scoped lang="scss">
    #box{
        width: auto;
        height: 400px;
        overflow: hidden;
        &>div{
            float: left;
        }
        .myCard{
            width: 5000px;
            overflow: hidden;
            position: relative;
        }
        .myButton{
            padding: 5px;
            margin: -168px 10px 0 10px;
            display: inline;
            position: relative;
        }
        .myRight{
            float: right;
        }
        .el-button--primary{
            background-color: #cfedff80;
            border-color: #cfedff80;
            &:hover{
                background-color: #6cc5fb;
                border-color: #6cc5fb;
            }
        }
    }
</style>
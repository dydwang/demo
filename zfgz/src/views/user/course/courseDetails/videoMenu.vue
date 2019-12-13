<template>
    <div id="menuMain">
        <div id="menu" >
            <div class="list"  v-for="(item,index) in chapterList" :key="index">
                <div class="chapter" :class="{'first':index===0}">
                    {{index+1}} {{item.chapterName}}
                </div>
                <div class="main" :class="{'clickColor':clickMenu===`${index}-${id}`}"
                     v-for="(it,id) in subsectionList[index]" :key="id" @click="toVideo(it,index,id)">
                    <div class="subsection" >
                        {{index+1}}-{{id+1}} {{it.sectionName}}
                    </div>
                    <!--<div class="time subsection" :class="{'clickColor':clickMenu===`${index}-${id}`}">-->
                        <!--10分钟-->
                    <!--</div>-->
                </div>
                <el-divider></el-divider>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "videoMenu",
        props:['courseId','item','purchase'],
        data(){
            return{
                chapterList:[],//章标题,
                subsectionList:[{}],//小节标题
                clickMenu:'0-0',//点击变蓝
                menuWidth:'',

                videoPath:'',
                videoName:'',
                videoNum:0,//第几个视频
            }
        },
        methods:{
            setMenuHeight(val){//设置导航高度
               let p=parseFloat(27/16)
                document.getElementById("menu").style.height=(val*p)+'px'
            },
            getSection(){
                let that=this
                this.$api.getSection({courseId:this.item.courseId},res=>{//为小节排序 根据章节分类
                    res.forEach((val,id)=>{
                        that.subsectionList[id]=res.filter((item)=>{
                            return item.sectionLabel.split('-')[0]===id+''
                        })
                    })
                    let videoPath=this.subsectionList[0][0].videoPath
                    let videoName=this.subsectionList[0][0].sectionName
                    sessionStorage.setItem('subsectionList'+this.courseId,JSON.stringify(this.subsectionList))
                    this.getVideo(videoPath,videoName)
                    this.$router.push('/refresh')
                })
            },
            getChapter(){
                this.$api.getChapter({courseId:this.item.courseId},res=>{
                        this.chapterList=res
                })
            },
            getVideoNum(index,id){
                if(this.purchase&&this.item.courseCharge==='false'){
                    let videoNum=0; //第几个视频
                    for(let i=0;i<index;i++){
                        videoNum=videoNum+this.subsectionList[i].length
                    }
                    videoNum=videoNum+id+1
                    return videoNum <= this.item.freeNode;

                }else{
                    return true
                }
            },

            toVideo(it,index,id){  //点击视频菜单
                if(this.getVideoNum(index,id)){ //已经购买或免费
                    this.clickMenu=`${index}-${id}`
                    let item=JSON.parse(JSON.stringify(this.item))
                    item.menu=this.clickMenu
                    this.$router.push({
                        path: '/courseDetails',
                        query: item
                    })
                    this.getVideo(it.videoPath,it.sectionName)
                }else{    //还未购买
                    console.log('还未购买')
                    this.$message('还未购买,只能免费观看前'+this.item.freeNode+'节')
                }
            },
            getVideo(videoPath,videoName){
                this.$emit('look',videoPath,videoName)
            }
        },
        mounted() {
            //页面路由传值

            //右边导航栏自适应
            let menuWidths=document.getElementById("menu").offsetWidth+2
            this.setMenuHeight(menuWidths)
            window.onresize = () => {//监听网页宽度变化时
                return (() => {
                    this.menuWidth = document.getElementById("menu").offsetWidth
                })()
            }
        },
        created(){
            let subsectionList=sessionStorage.getItem('subsectionList'+this.courseId)
            if(subsectionList){
                this.subsectionList=JSON.parse(subsectionList)
                let videoPath=this.subsectionList[0][0].videoPath
                let videoName=this.subsectionList[0][0].sectionName
                this.getVideo(videoPath,videoName)
            }else{
                this.getSection()
            }

            this.getChapter()
        },
        watch:{
            menuWidth(val){ //监听网页宽度变化时
                this.setMenuHeight(val)
            }
        },
    }
</script>

<style scoped lang="scss">
    #menuMain{

        #menu{
            width: 100%;
            //height:500px;
            overflow: auto;
            .list{
                .first{
                    margin-top: 35px;
                }
                .chapter{
                    margin-left: 10px;
                    height: 21px;
                    overflow: hidden;
                }
                .subsection{
                    margin-left: 30px;
                    margin-bottom: 10px;
                    font-size: 14px;
                    height: 18px;
                    overflow: hidden;
                }
                .time{
                    color: #606266;
                }
                .main{
                    &:hover{
                        color: #23b8ff !important;
                    }
                }
                .clickColor{
                    color: #23b8ff !important;
                }
            }
            .el-divider{
                width: auto;
                margin:10px 10px;
                background-color: #272b2f;
            }
        }
        ::-webkit-scrollbar-track { /* 定义滚动条轨道  内阴影+圆角*/
            -webkit-box-shadow:  0 0 0 #131313;
            background-color: #131313;
        }
        ::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
            border-radius: 1px;
            -webkit-box-shadow: inset 0 0 1px #948e8e;
            background-color: #948e8e;
            width: 2px;
        }
        ::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        }
    }

</style>
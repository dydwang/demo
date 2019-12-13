<template>
    <div id="create">
        <el-steps :active="active"   align-center finish-status="success" >
            <el-step description="创建课程" ></el-step>
            <el-step description="创建章节" ></el-step>
            <el-step description="上传视频" ></el-step>
        </el-steps>
        <first  :courseList="courseList" ref="first"  v-show="active===0"></first>
        <second ref="second" :tableData="tableData" @videoList="videoList" v-if="active===1"></second>
        <third  ref="third" :list="list" :courseId="courseId" :tableData="tableData" v-if="list!==[]&&active===2"></third>
        <el-button v-show="active===1" @click="backStep()">上一步</el-button>
        <el-button v-show="active===0" @click="nextStep()" type="primary">下一步</el-button>
        <el-button v-show="active===1" @click="createStep()" type="primary">创建</el-button>
    </div>
</template>

<script>
    import first from './first'
    import second from './second'
    import third from './third'
    export default {
        name: "upload",
        components:{
            first,second,third
        },
        props:['courseList'],
        data(){
            return{
                active:0,
                list:[],
                tableData:[],
                courseId:this.courseList.courseId,
                chapterList:[],
                sectionList:[],
            }
        },
        methods:{
            backStep(){  //上一步
                this.active--
            },
            nextStep(){  //下一步
                if(this.$refs.first.submitForm()){
                    this.active++
                }
            },
            createStep(){ //创建
                let c={courseId:this.courseId}
                let b=true
                this.$api.deleteCourse(c,res=>{

                    if(res){
                        this.$api.deleteSection(c,res=>{
                            if(!res) b=false
                        });
                        this.$api.deleteChapter(c,res=>{
                            if(!res) b=false
                        });
                        if(b){
                            this.$refs.second.submitForm()
                        }
                    }

                })


            },
            videoList(list,tableData){  //视频列表
                /**
                    把键值对像变为数组
                */
                console.log(list)
                console.log(tableData)
                let index=[]
                let value=[]
                for(let i in list){
                    index.push(i)
                }
                for(let val of index){
                    value.push(list[val])
                }
                this.$refs.first.createCourse(this.courseId)
                this.list=value
                this.tableData=tableData
                this.active++
            },
            getChapter(){
                let arr=[]
                this.$api.getChapter({courseId:this.courseList.courseId},res=>{
                    this.getSection()
                    res.forEach((val,index)=>{
                        arr.push({chapter:{},section:[]})
                        let c=[]
                        c=res.filter((v,id)=>{
                            return val.chapterLabel===index+''
                        })
                        arr[index].chapter=c[index]
                    })
                    this.tableData=arr
                })
            },
            getSection(){
                let that=this
                let c=[]
                this.$api.getSection({courseId:this.courseList.courseId},res=>{//为小节排序 根据章节分类
                    this.tableData.forEach((val,index)=>{
                        c=res.filter((v,id)=>{
                            return v.sectionLabel.split('')[0]===index+''
                        })
                        this.tableData[index].section= c
                    })
                })
            },
        },
        mounted(){
            this.getChapter()
        },
        created() {
            // if(this.$userInfo.grade!==1){
            //     this.$router.push('/grade')
            //     this.$message('没有权限，请申请')
            //     this.$resetSetItem('leftMenu', '4');
            // }
        }
    }
</script>

<style scoped lang="scss">
    #create{
        margin:0 auto;
        width: 100%;
        min-width: 680px;
    }
</style>
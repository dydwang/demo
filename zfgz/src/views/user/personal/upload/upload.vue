<template>
    <div id="create">
        <el-steps :active="active"   align-center finish-status="success" >
            <el-step description="创建课程" ></el-step>
            <el-step description="创建章节" ></el-step>
            <el-step description="上传视频" ></el-step>
        </el-steps>
        <first  ref="first"  v-show="active===0"></first>
        <second ref="second" @videoList="videoList" v-show="active===1"></second>
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
        data(){
            return{
                active:0,
                list:[],
                tableData:[],
                courseId:Date.now()+'',
                status:''
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
                // this.active++
                this.$refs.second.submitForm()
                // if(this.$refs.second.submitForm()){
                //     //this.$refs.first.submitImg()
                //     //this.$refs.second.submitVideo()
                //     console.log('填写完成')
                //     this.active++
                // }

            },
            videoList(list,tableData){  //视频列表
                /**
                    把键值对像变为数组
                */
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
            backView(){
                this.$router.push('/grade')
                this.$message('没有权限，请申请')
                this.$resetSetItem('leftMenu', '4');
            }

        },
        created() {
            this.$api.getGrade({openId: this.$userInfo.openId}, res => {
                if(res){
                    if(res[0].grade!=='1'){
                        this.backView()
                    }
                }
            })
            let c={
                openId:this.$userInfo.openId
            }
            this.$api.getTeacher(c,res=>{
                if(res[0].status!=='2'){
                    this.backView()
                }
            })
        },

    }
</script>

<style scoped lang="scss">
    #create{
        margin:0 auto;
        width: 100%;
        min-width: 680px;
    }
</style>
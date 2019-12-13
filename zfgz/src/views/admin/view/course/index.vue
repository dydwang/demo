<template>
    <div id="box">
        <el-input v-model="courseName" placeholder="请输入课程名称" style="margin-bottom: 10px"></el-input>
        <manageVideo :admin="true" :tableData="tableData"></manageVideo>
        <next-page @next="getCourse" ref="nextPage" :setupCount="20"></next-page>
    </div>
</template>

<script>
    import manageVideo from "../../../user/personal/manageVideo/manageVideo"
    export default {
        name: "index",
        props: [''],
        data() {
            return {
                tableData:[],
                courseName:''
            }
        },
        methods: {
            getCourse(c){
                this.$api.getCourse(c,res=>{
                    if(res){
                        this.tableData=res
                        this.$refs.nextPage.judge(res.length)
                    }
                })
            },
            selectCourse_courseName(){
                this.$api.selectCourse_courseName({courseName:this.courseName},res=>{
                    this.tableData=res
                })
            }
        },
        mounted() {
            let c={
                offset:0,
                count:20
            }
            this.getCourse(c)
        },
        create() {
        },
        components:{
            manageVideo
        },
        watch:{
            courseName(){
                this.selectCourse_courseName()
            }
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
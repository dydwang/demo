<template>
    <div id="box">
        <one v-show="!showThree" :courseId="courseId" ref="one"></one>
        <div v-if="!showThree">

            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="videoName"
                        label="小节名称">
                    <template slot-scope="scope">
                        <el-input v-model="tableData[scope.$index].videoName"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="update"
                        label="选择文件">
                    <template slot-scope="scope">
                        <upVideo ref="upVideo" @changeVideo="changeVideo" :index="scope.$index"></upVideo>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="tableData.splice(scope.$index+1,0,JSON.parse(JSON.stringify(tableList)))">+</el-button>
                        <el-button size="mini" :disabled="tableData.length===1" type="danger"  @click="tableData.splice(scope.$index,1)" >-</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" style="width: 50%;margin-left: 25%;margin-top: 10px" @click="submit">上传</el-button>
        </div>

        <three :courseId="courseId" :tableData="tableData" @success="success" v-else></three>


    </div>
</template>

<script>
    import one from './one'
    import three from './three'
    import upVideo from './upVideo'
    export default {
        name: "two",
        props: [''],
        data() {
            return {
                tableData:[{
                    videoName:'',
                    videoId:'',
                    file:'',
                    index:'',
                    videoPath:''
                }],
                tableList: {
                    videoName:'',
                    videoId:'',
                    file:'',
                    index:'',
                    videoPath:''
                },
                courseId:Date.now(),
                showThree:false
            }
        },
        methods: {
            changeVideo(file,index){
                console.log(index)
                this.tableData[index].file=file

            },
            success(){
                console.log(123465)
                this.$refs.one.createCourse()
            },
            submit(){
                this.verification(r=>{
                    this.showThree=true
                })
            },
            //验证
            verification(call){
                this.$refs.one.verification(r=>{
                    let v=this.tableData.every((val)=>{
                        return val.videoName!==''&&val.file!==''
                    })
                    if(!v) this.$message.error('请检查视频名称和文件填写完整');
                    call(v)
                })
            }
        },
        mounted() {
        },
        created() {
        },
        components:{
            one, three, upVideo
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
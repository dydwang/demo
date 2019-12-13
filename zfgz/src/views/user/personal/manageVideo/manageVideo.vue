<template>
    <div id="box">
        <el-table
                v-if="!change"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="imagePath">
                <template slot-scope="scope">
                    <user-image width="60px" height="60px" :src="scope.row.imagePath"></user-image>
                </template>
            </el-table-column>
            <el-table-column
                    prop="courseName"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="clickNum"
                    label="热度">
            </el-table-column>
            <el-table-column
                    prop="courseId"
                    label="上传时间">
                <template slot-scope="scope">
                    {{$allFun.getTime(scope.row.courseId)}}
                </template>
            </el-table-column>
            <el-table-column
                    v-if="admin===true"
                    prop="clickNum"
                    :label="new Date(Date.now()).getHours()+':'+(parseInt((new Date(Date.now()).getMinutes()/3).toFixed(0)*3)+2) +'过期'">
                <template slot-scope="scope">
                    {{cryptoJs(scope.row.courseId)}}
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateCourse(scope)">修改</el-button>
                    <el-button type="text" style="color: red" size="small" @click="deleteCourse(scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <upload :courseList="courseList" v-else></upload>
    </div>
</template>

<script>
    const crypto = require('crypto');
    import upload from './upload/upload'
    export default {
        name: "manageVideo",
        props:['tableData','admin'],
        data() {
            return {
                change:false,
                courseList:{},

            }
        },
        methods: {
            cryptoJs(courseId){
                const now=Date.now()
                const secret = this.$allFun.getTime(now)+new Date(now).getHours()+(parseInt((new Date(now).getMinutes()/3).toFixed(0)));
                return crypto.createHmac('sha256', secret)
                    .update(courseId)
                    .digest('hex');

            },
            selectCourse_openId(){
                this.$api.selectCourse_openId({create:this.$userInfo.openId},res=>{
                    this.tableData=res
                })
            },
            updateCourse(scope){
                this.courseList=scope.row
                this.change=true
            },
            deleteCourse(scope){
                let c={courseId:scope.row.courseId}
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.deleteCourse(c,res=>{
                        if(res){
                            this.tableData.splice(scope.$index,1)
                            this.$api.deleteSection(c,res=>{});
                            this.$api.deleteChapter(c,res=>{});
                        }
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {

                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            }
        },
        mounted() {

        },
        created() {
            if(!this.tableData){
                this.selectCourse_openId()
            }


        },
        components:{
            upload
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
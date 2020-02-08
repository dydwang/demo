<template>
    <div id="box">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="课程名称">
            </el-table-column>
            <el-table-column
                    prop="courseId"
                    label="创建时间">
                <template slot-scope="scope">
                    {{$Time(scope.row.courseId).getTime()}}
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="update(scope.row)">修改</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="修改课程"
                :visible.sync="dialogVisible"
                width="50%">
            <upTow :courseId="courseList.courseId" :courseList="courseList"></upTow>
        </el-dialog>
    </div>
</template>

<script>
    import upTow from './update/two'
    export default {
        name: "table",
        props: [''],
        data() {
            return {
                tableData:[],
                dialogVisible:false,
                courseList:{}
            }
        },
        methods: {
            update(row){
                this.dialogVisible=true
                this.courseList=row
            }
        },
        mounted() {
            this.$api.getCourse({},res=>{
                if(res) this.tableData=res;
            })
        },
        created() {
        },
        components:{
            upTow
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
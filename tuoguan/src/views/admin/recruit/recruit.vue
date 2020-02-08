<template>
    <div id="box">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="出生日期">
            </el-table-column>
            <el-table-column
                    prop="course"
                    label="教授科目">
            </el-table-column>
            <el-table-column
                    prop="school"
                    label="申请校区">
            </el-table-column>
            <el-table-column
                    prop="salary"
                    label="期望薪水">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="changeTeacherStatus('1',scope.row.teacherId,scope.$index)">同意</el-button>
                    <el-button type="text" @click="changeTeacherStatus('-1',scope.row.teacherId,scope.$index)" style="color: red">不同意</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "recruit",
        props: [''],
        data() {
            return {
                tableData:[]
            }
        },
        methods: {
            changeTeacherStatus(status,teacherId,index){
                let cnt={
                    status:status,
                    teacherId:teacherId
                }
                this.$api.changeTeacherStatus(cnt,res=>{
                    if(res){
                        this.$message.success('修改成功')
                        this.tableData.splice(index,1)
                    }
                })
            }
        },
        mounted() {
            this.$api.getTeacher({where:"where status='0'"},res=>{
                if(res.length){
                    this.tableData=res
                }
            })
        },
        created() {
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
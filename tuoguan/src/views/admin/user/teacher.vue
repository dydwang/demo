<template>
    <div id="box">
        查询工作人员(人员名称)：
        <el-input style="width: 30%" v-model="name" @change="selectPay"></el-input>
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
                    <el-button type="text" @click="updateDia(scope.row)">修改</el-button>
                    <el-button type="text" style="color: red" @click="changeTeacherStatus('3',scope.row.teacherId,scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="修改信息"
                :visible.sync="dialogVisible"
                width="50%">
            <updaeTeacher :ruleForm="updateList" />
        </el-dialog>
    </div>
</template>

<script>
    import updaeTeacher from './updateTeacher'
    export default {
        name: "recruit",
        props: [''],
        data() {
            return {
                tableData:[],
                dialogVisible:false,
                updateList:{},
                name:''
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
            },
            updateDia(row){
                this.updateList=JSON.parse(JSON.stringify(row))
                this.updateList.course=row.course.split(',')
                this.dialogVisible=true            },
            selectPay(value){
                this.$api.selectTeacher({name:value},res=>{
                    if(res) this.tableData=res
                })
            }

        },
        mounted() {
            this.$api.getTeacher({where:"where status='1'"},res=>{
                if(res.length){
                    this.tableData=res
                }
            })
        },
        created() {
        },
        components:{
            updaeTeacher
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
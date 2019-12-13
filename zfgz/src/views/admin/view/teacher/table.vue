<template>
    <div id="main">
        <el-table
                :data="tableData"
                style="width: 96%;margin-left: 2%">
            <el-table-column
                    prop="imagePath"
                    label="头像">
                <template slot-scope="scope">
                    <user-image :src="scope.row.imagePath"></user-image>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="手机号">
            </el-table-column>
            <el-table-column
                    prop="qq"
                    label="QQ">
            </el-table-column>
        </el-table>
        <next-page @next="selectTeacher" ref="nextPage"></next-page>
    </div>
</template>

<script>
    export default {
        name: "teacher_details",
        props: [''],
        data() {
            return {
                tableData:[],
            }
        },
        methods: {
            selectTeacher(c){
                c.status='2'
                this.$api.selectTeacher(c,res=>{
                    this.tableData=res
                    this.$refs.nextPage.judge(res.length)
                })
            }
        },
        mounted() {
            let c={
                count:10,
                offset:0,
            }
            this.selectTeacher(c)
        },
        create() {
        },
    }
</script>

<style scoped lang='scss'>
    #main {
        height: 100px;
    }
</style>
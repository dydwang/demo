<template>
    <div id="box">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="schoolName"
                    label="校区名称">
            </el-table-column>
            <el-table-column
                    prop="schoolMain"
                    label="托管时间">
            </el-table-column>
            <el-table-column
                    prop="schoolAddress"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="schoolCourse"
                    label="课程">
            </el-table-column>
            <el-table-column
                    prop="schoolGrade"
                    label="托管年纪">
            </el-table-column>
            <el-table-column
                    prop="schoolPrice"
                    label="价格">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "table",
        props: [''],
        data() {
            return {
                tableData:[]
            }
        },
        methods: {},
        mounted() {
            this.$api.getSchool({},res=>{
                if(res) this.tableData=res
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
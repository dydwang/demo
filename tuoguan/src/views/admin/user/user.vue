<template>
    <div id="box">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="昵称">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码">
            </el-table-column>
            <el-table-column
                    prop="userId"
                    label="注册时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: [''],
        data() {
            return {
                tableData:[]
            }
        },
        methods: {},
        mounted() {
        },
        created() {
            this.$api.getUser({},res=>{
                if(res.length){
                    this.tableData=res
                }
            })
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
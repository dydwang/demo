<template>
    <div id="box">
        <el-table
                :data="tableData"
                show-summary
                style="width: 100%">
            <el-table-column
                    prop="payId"
                    label="购买时间">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="订单名称">
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="数量">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格/元">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "index",
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
            this.$api.getPays({where:'where userId ='+this.$userInfo.userId},res=>{
                if(res.length>0){
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
<template>
    <div id="box">
        查询订单(订单名称)：
        <el-input style="width: 30%" v-model="name" @change="selectPay"></el-input>
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
                tableData:[],
                name:''
            }
        },
        methods: {
            selectPay(value){
                this.$api.selectPays({name:value},res=>{
                    if(res) this.tableData=res
                })
            }
        },
        mounted() {
        },
        created() {
            this.$api.getPays({where:''},res=>{
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
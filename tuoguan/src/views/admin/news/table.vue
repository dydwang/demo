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
                    prop="newName"
                    label="名称">
            </el-table-column>
            <el-table-column
                    label="创建时间">
                <template slot-scope="scope">
                    {{$Time(scope.row.newId).getTime()}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="schoolAddress"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" @click="deNew(scope.row,scope.$index)">删除</el-button>
                </template>
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
        methods: {
            deNew(row,index){
                let cnt={
                    newId:row.newId
                }
                this.$api.deNew(cnt,res=>{
                    if(res) this.tableData.splice(index,1)
                })
            }
        },
        mounted() {
        },
        created() {
            this.$api.getNews({},res=>{
                this.tableData=res
            })
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
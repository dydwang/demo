<template>
    <div id="main">
        <el-table
                :data="tableData"
                style="width: 96%;margin-left: 2%">
            <el-table-column
                    prop="newId"
                    label="日期">
                <template slot-scope="scope">
                {{$allFun.getTime(scope.row.newId)}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="newName"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="newIntroduce"
                    label="介绍">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="look(scope.row)">查看</el-button>
                    <el-button type="text" size="small" @click="deleteNews(scope.$index,scope.row.newId)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <next-page @next="getNews" ref="nextPage"></next-page>
    </div>
</template>

<script>
    export default {
        name: "news_details",
        props: [''],
        data() {
            return {
                tableData:[{}],
                offset:0,
                count:10
            }
        },
        methods: {
            getNews(c){
                this.$api.getNews(c,res=>{
                    this.tableData=res
                    this.$refs.nextPage.judge(res.length)
                })
            },
            deleteNews(id,c){
                console.log(c)
                this.$api.deleteNews({newId:c},res=>{
                    if(res===true){
                        this.tableData.splice(id,1)
                    }
                })
            },
            look(row){
                this.$router.push({
                    path:'/adminView_news_Info',
                    query:row
                })
            }
        },
        mounted() {
            let c={
                offset:0,
                count:10
            }
            this.getNews(c)

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
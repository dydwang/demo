<template>
    <div id="box">
        <p style="text-align: center">新闻资讯</p>
        <el-row v-for="(item,index) in tableData"  :key="index" class="elrow"  style="margin-bottom: 20px">
                <span @click="look(item)">
                     <el-col style="width: 65px">
                    <div style="font-size: 32px;color: #66b1ff;font-weight: 600">{{$Time(item.newId).getTime('D')}}</div>
                    <div style="font-size: 14px;color: #6d6060;">{{$Time(item.newId).getTime('Y-M')}}</div>
                </el-col>
                <el-col :span="19" :offset="1" style="padding-top: 10px;overflow: hidden">
                    <div class="boxTitle">{{item.newName}}</div>
                    <div class="boxMain">{{item.newIntroduce}}</div>
                </el-col>
                </span>

        </el-row>
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
            look(row){
                this.$router.push({
                    path:'/newsInfo',
                    query:row
                })
            },
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
        width: 80%;
        margin-left: 10%;
        .elrow{
            &:hover{
                background-color: #f1fdf5;
            }
        }
    }
</style>
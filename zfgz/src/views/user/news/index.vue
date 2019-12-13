<template>
    <div id="news">
        <div class="title">新闻资讯</div>
        <div class="main">
            <el-row v-for="(item,index) in tableData"  :key="index" class="elrow" style="margin-bottom: 20px">
                <span @click="look(item)">
                     <el-col style="width: 65px">
                    <div style="font-size: 32px;color: #66b1ff;font-weight: 600">{{getDay(item.newId)}}</div>
                    <div style="font-size: 14px;color: #6d6060;">{{getMonth(item.newId)}}</div>
                </el-col>
                <el-col :span="19" :offset="1" style="padding-top: 10px;overflow: hidden">
                    <div class="boxTitle">{{item.newName}}</div>
                    <div class="boxMain">{{item.newIntroduce}}</div>
                </el-col>
                </span>

            </el-row>
            <next-page @next="getNews" ref="next-page"></next-page>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            getNews(c){
                this.$api.getNews(c,res=>{
                    this.tableData=res
                    this.$refs['next-page'].judge(res.length)
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
                    path:'/newsInfo',
                    query:row
                })
            },
            getMonth(time){
              let date=new Date(parseInt(time))
              let year=date.getFullYear()
              let month=date.getMonth()+1
              return `${year}-${month}`
            },
            getDay(time){
              let date=new Date(parseInt(time))
              let day=date.getDay() + 1
              if(day<10){
                  day='0'+day
              }
              return day
          }
        },
        mounted() {

        },
        created() {
            let c={
                offset:0,
                count:10
            }
            this.getNews(c)
        }
    }
</script>

<style scoped lang="scss">
#news{
    .title{
        margin: 30px auto;
        text-align: center;
        font-size: 18px;
        color: black;
    }
    .main{
        width: 100%;

    }
    .boxTitle{
        font-size: 18px;
        font-weight: 600;
        height: 24px;
        margin-bottom: 7px;
        width: 100%;
        overflow: hidden
    }
    .boxMain{
        font-size: 14px;
        color:#615a5a;
        height: 20px;
        width: 100%;
        overflow: hidden
    }
    .elrow{
        &:hover{
            background-color: #f1fdf5;
        }
    }
}
</style>
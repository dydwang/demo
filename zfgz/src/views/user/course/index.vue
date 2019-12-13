<template>
    <div id="course">
        <el-container class="infinite-list-wrapper">
            <!--<el-header height="40px">-->
                <!--<el-button  size="mini">最新</el-button>-->
                <!--<el-button  size="mini">最热</el-button>-->
                <!--<el-button  size="mini">价格</el-button>-->
                <!--<el-button  size="mini">免费</el-button>-->
            <!--</el-header>-->
            <scroll-course @pushTable="pushTable" :table-data="tableData"></scroll-course>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                tableData:[],
            }
        },
        components:{
        },
        computed: {

        },
        methods: {
            pushTable(cnt,callback){
                console.log(cnt)
                this.getCourse(cnt,callback)
            },
            getCourse(c,callback){
                this.$api.getCourse(c,res=>{
                    if(res){
                        callback(res)
                    }
                })
            }
        },
        mounted(){
          let c={
              offset:0,
              count:20
          }
          this.getCourse(c,(res)=>{
              this.tableData=res
          })

        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
    #course{
        .message{
            margin: 0 auto;
            text-align: center;
            color: black;
        }
        .el-header{
            padding: 20px 0 !important;
        }
        .el-main{
            padding: 20px 0 !important;
            margin-left: -7px;
        }
    }
</style>
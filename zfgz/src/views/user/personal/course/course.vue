<template>
    <div id="box">
        <scroll-course @pushTable="pushTable" :table-data="tableData"></scroll-course>
    </div>
</template>

<script>
    export default {
        name: "course",
        data(){
            return{
                tableData:[],
            }
        },
        methods:{
            pushTable(cnt,callback){
                this.getJoinCourse_openId(cnt,callback)
            },
            getJoinCourse_openId(cnt,callback){
                this.$api.getJoinCourse_openId({openId:this.$userInfo.openId},res=>{
                    if(res[0]){
                        let arr=[]
                        res.forEach((item)=>{
                            this.$api.selectCourse_courseId({courseId:item.courseId},r=>{
                                if(r[0]){
                                    arr.push(...r)
                                }
                            })
                        })
                        callback(arr)
                    }
                })
            }
        },
        mounted() {
            this.getJoinCourse_openId({},(callback)=>{
                this.tableData=callback
            })
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    #box{

    }
</style>
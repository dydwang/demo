<template>
    <div id="box">
        <el-row :gutter="20" >
            <el-col style="margin-bottom: 20px" v-for="(item,index) in tableData" :key="index" :span="6" >
                <div @click="toVideo(item)">
                    <el-card class="box-card" shadow="hover" >
                        <img :src="require('@/assets/school/'+parseInt(9-index%10)+'.png')" width="100%" height="140px">
                        <div style="font-weight: 600">{{item.name}}</div>
                    </el-card>
                </div>

            </el-col>
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
            toVideo(item){
                this.$router.push({
                    path:'/videoView',
                    query:item
                })
            }
        },
        mounted() {
        },
        created() {
            this.$api.getCourse({},res=>{
                if(res) this.tableData=res;
            })
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
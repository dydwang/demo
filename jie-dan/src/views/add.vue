<template>
    <div id="add">
        <up-pdf :auto-upload="true" @success="success"></up-pdf>
        <el-date-picker
                v-model="item.time"
                type="date"
                placeholder="接单日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp">
        </el-date-picker>
        <el-input v-model="item.jieshao" placeholder="请输入介绍"></el-input>
        <el-input v-model="item.price" placeholder="请输入价格"></el-input>
        <el-button type="primary" @click="submits">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "add",
        props: [''],
        data() {
            return {
                item:{
                    word:'',
                    names:'',
                    time:Date.now(),
                    jieshao:'',
                    status:'未完成',
                    price:450
                },
            }
        },
        methods: {
            submits(){
                this.$api.addPdf(this.item,res=>{

                })
            },
            success(file,path){
                this.item.word=path
                this.item.names=file.name

            }
        },
        mounted() {


        },
        created() {
        },
        components: {},
        watch: {},
    }
</script>

<style scoped lang='scss'>
    #add {
        width: 30%;
        margin: 0 35%;
    }
</style>
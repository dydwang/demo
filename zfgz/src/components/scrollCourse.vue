<template>
    <div id="box">
        <el-container class="infinite-list-wrapper">
            <el-main :infinite-scroll-disabled="disabled"  class="infinite-list">
                <course :table-data="tableData"></course>
            </el-main>
            <el-footer>
                <div v-if="loading" class="message ">加载中<i class="el-icon-loading"></i></div>
                <div v-if="noMore" class="message">没有更多了</div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "scrollCourse",
        props: ['tableData'],
        data(){
            return{
                page:1,
                offset:0,
                count: 20,//最大加载数
                loading: false,//加载时
                noMore:true,
            }
        },
        components:{
        },
        computed: {
            disabled() { //是否显示继续加载
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                let page=this.page++
                this.loading = true
                this.page=page
                let cnt = {
                    count:this.count,
                    offset:parseInt(page-1)*parseInt(this.count)
                }
                setTimeout(() => {
                    //回调得到加载的视频列表
                    this.$emit('pushTable',cnt,(callback)=>{
                        console.log(callback)
                        this.tableData.push(...callback)
                        this.noMore=callback.length / this.count === 1
                    })
                    this.loading = false
                }, 1000)
            }
        },
        created() {
            //监听是否到底
            let that=this
            window.onscroll = function () {
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //变量windowHeight是可视区的高度
                let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                //滚动条到底部的条件
                if (scrollTop + windowHeight === scrollHeight) {
                    //写后台加载数据的函数
                    if(!that.noMore){
                        that.load()
                    }
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    #box {
        width: 100%;
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
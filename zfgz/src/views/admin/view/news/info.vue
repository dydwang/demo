<template>
    <div id="box">
        <div>
            <com-title :text="tableData.newName" style="margin-bottom: 10px"></com-title>
            <span style="float: right;margin-bottom: 5px;font-size: 12px">{{$allFun.getTime(tableData.newId)}}</span>
        </div>
        <pdf  v-for="i in numPages"
              :key="i"
              :page="i"
              :src="pdfUrl" style="width: 100%; height: auto;" @num-pages="pageCount=$event"></pdf>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    import {nodeUrl}  from '@/assets/api/url'
    export default {
        name: "news_Info",
        props: [''],
        data() {
            return {
                tableData:{},
                nodeUrl:nodeUrl+'video/getPdf?pdfPath=',
                pageCount:0,
                pdfUrl:'',
                numPages:0,
            }
        },
        methods: {
            async loadPdfHandler () {
                //src为你服务器上存放pdf的路径
                this.pdfUrl = pdf.createLoadingTask(this.nodeUrl+this.tableData.pdfPath);
                this.pdfUrl.then(pdf => {
                    this.numPages = pdf.numPages
                })
            },
        },
        mounted() {
            if(this.$router.history.current.query){
                this.tableData=this.$router.history.current.query
            }else{
                this.$router('/adminView_news_table')
            }

            this.loadPdfHandler()

        },
        create() {
        },
        components:{
            pdf
        }
    }
</script>

<style scoped lang='scss'>
    #box {
        width: 100%;
        height: 100%;
        .iframes{
            overflow:hidden;
            height:100%;
            position:fixed;
            left: 0;
            scrolling:no;
            scroll:no;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
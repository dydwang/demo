<template>
    <div id="box" >
        <div>
            <p style="text-align: center">{{tableData.newName}}</p>
            <span style="float: right;margin-bottom: 5px;font-size: 12px">{{$Time(tableData.newId).getTime()}}</span>
        </div>
        <videos style="margin-top: 50px" v-if="tableData.videoPath!==' '" :src="tableData.videoPath"></videos>
        <dydpdf :src="nodeUrl+tableData.pdfPath"></dydpdf>
    </div>
</template>

<script>
     import dydpdf from './dydPdf'
    import nodeUrl  from '@/assets/util/url'
     import videos from '../video/video'
    export default {
        name: "news_Info",
        props: [''],
        data() {
            return {
                tableData:{},
                nodeUrl:nodeUrl+'course/getPdf?pdfPath=',
                pageCount:0,
                numPages:0,
            }
        },
        methods: {

        },
        mounted() {

        },
        created(){
            if(this.$router.history.current.query){
                this.tableData=this.$router.history.current.query
                console.log(this.tableData)
            }else{
                this.$router('/news')
            }
        },
        components:{
            dydpdf,videos
        },
    }
</script>

<style scoped lang='scss'>
    #box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
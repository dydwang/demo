<template>
    <div id="box">
        <videos style="width: 80%;float: left" v-if="path!==''&&showVi" :src="path"></videos>
        <rightMenu
                @startVideo="startVideo"
                v-if="courseOb!=={}" :tableData="tableData"
                :courseOb="courseOb"  style="width: 20%;float: left">
        </rightMenu>
    </div>
</template>

<script>
    import videos from './video'
    import rightMenu from './rightMenu'
    export default {
        name: "videoView",
        props: [''],
        data() {
            return {
                courseOb:{},
                tableData:[],
                path:'',
                showVi:true
            }
        },
        methods: {
            startVideo(path){
                this.path=path
            }
        },
        watch:{
            path(){
                this.showVi=false
                setTimeout(()=>{
                    this.showVi=true
                },10)
            }
        },
        mounted() {
        },
        created() {
            this.courseOb=this.$route.query

            this.$api.getVideo({courseId:this.courseOb.courseId},res=>{
                if(res) {
                    this.tableData=res
                    this.path=this.tableData[0].videoPath
                }

            })
        },
        components:{
            videos,rightMenu
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
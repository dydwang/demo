<template>
    <div id="box">


        <!--<pdf :src="nodeUrl+'video/getPdf?pdfPath=9403e11fbccaf830413d801abb34df44'"></pdf>-->
        <el-form :model="ruleForm" :rules="rules" label-position="left" style="width: 500px" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="名称" prop="newName">
                <el-input v-model="ruleForm.newName"></el-input>
            </el-form-item>

            <el-form-item label="PDF" prop="pdfNowPath">
                <uoPdf  style="float: left" ref="upPdf" @success="successPdf" @changePdf="changePdf"></uoPdf>
                <el-button v-if="ruleForm.pdfNowPath" @click="pdfNowPath=ruleForm.pdfNowPath" style="float: left;margin-left: 20px">预览</el-button>
                <el-button v-if="pdfNowPath" @click="pdfNowPath=''" style="float: left;margin-left: 20px">关闭</el-button>
            </el-form-item>
            <el-form-item label="视频（可不上传）">
                <upVideo index="1"  style="float: left" ref="upVideo" @changeVideo="changeVideo" @success="successVideo"></upVideo>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit()">
                    上传
                </el-button>
            </el-form-item>
        </el-form>
        <iframe :src="ruleForm.pdfNowPath"
                v-if="pdfNowPath"
                name="showHere" frameborder=no scrolling=auto height="1000px"  width="100%">
        </iframe>
    </div>
</template>

<script>
    import uoPdf from './up-pdf'
    import nodeUrl from '@/assets/util/url'
    import pdf from 'vue-pdf'
    import upVideo from '../course/upVideo'
    export default {
        name: "news_create",
        props: [''],
        data() {
            return {

                src:'chrome-extension://ibllepbpahcoppkjjllbabhnigcbffpi/',//谷歌预览pdf插件
                nodeUrl:nodeUrl,
                ruleForm: {
                    newId: Date.now(),
                    newName:'',
                    newIntroduce:'',
                    pdfNowPath:'',//临时pdf地址
                    pdfPath:'',
                    videoPath:' ',
                    videoFile:''
                },
                pdfNowPath:'',
                rules: {
                    newName: [
                        { required: true, message: '请输入名称', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 ', trigger: 'blur' }
                    ],
                    pdfNowPath: [
                        { required: true, message: '请选择PDF', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            changePdf(file,pdfNowPath){
                this.ruleForm.pdfNowPath=pdfNowPath
            },
            submit(){
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.$refs.upPdf.submit()
                    }else{
                        this.$message.error('请填写完整')
                    }
                })
            },
            successPdf(pdfPath){
                console.log('上传PDf')
                this.ruleForm.pdfPath=pdfPath

                if(this.ruleForm.videoFile===''){
                    this.$api.createNews(this.ruleForm,res=>{
                        this.ruleForm= {
                            newId: Date.now(),
                            newName:'',
                            newIntroduce:'',
                            pdfNowPath:'',//临时pdf地址
                            pdfPath:''
                        }
                    })
                }else{
                    this.$refs.upVideo.submit()
                }
            },
            successVideo(res,index){
                console.log('上传视频')
                this.ruleForm.videoPath=res
                this.$api.createNews(this.ruleForm,r=>{
                })

            },
            changeVideo(file,index){
                this.ruleForm.videoFile=file
            },
        },
        mounted() {
        },
        create() {
        },
        components:{
            pdf,uoPdf,upVideo
        }
    }
</script>

<style scoped lang='scss'>
    #box {
    }
</style>
<template>
    <div id="box">


        <!--<pdf :src="nodeUrl+'video/getPdf?pdfPath=9403e11fbccaf830413d801abb34df44'"></pdf>-->
        <el-form :model="ruleForm" :rules="rules" label-position="left" style="width: 500px" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="名称" prop="newName">
                <el-input v-model="ruleForm.newName"></el-input>
            </el-form-item>

            <el-form-item label="PDF" prop="pdfNowPath">
                <up-pdf  style="float: left" ref="upPdf" @success="success" @changePdf="changePdf"></up-pdf>
                <el-button v-if="ruleForm.pdfNowPath" @click="pdfNowPath=ruleForm.pdfNowPath" style="float: left;margin-left: 20px">预览</el-button>
                <el-button v-if="pdfNowPath" @click="pdfNowPath=''" style="float: left;margin-left: 20px">关闭</el-button>
            </el-form-item>
            <el-form-item label="介绍" prop="newIntroduce">
                <el-input v-model="ruleForm.newIntroduce"></el-input>
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
    import {nodeUrl}  from '@/assets/api/url'
    import pdf from 'vue-pdf'
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
                    pdfPath:''
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
                    newIntroduce: [
                        { required: true, message: '请输入介绍', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度在 3 到 100 ', trigger: 'blur' }
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
            success(pdfPath){
                this.ruleForm.pdfPath=pdfPath
                this.$api.createNews(this.ruleForm,res=>{
                    if(res===true){}
                    this.ruleForm= {
                        newId: Date.now(),
                            newName:'',
                            newIntroduce:'',
                            pdfNowPath:'',//临时pdf地址
                            pdfPath:''
                    }
                })
            }
        },
        mounted() {
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
    }
</style>
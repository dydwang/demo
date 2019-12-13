<template>
    <div id="box">
        <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Q Q" prop="qq">
                <el-input v-model.number="ruleForm.qq" type="age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
                <el-input v-model.number="ruleForm.phone" type="age" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="头像" prop="imageName">
                <up-img ref="upImg" @success="getImgPath"  @changeImg="changeImg" :image="ruleForm.imagePath" />
            </el-form-item>
            <el-form-item label="介绍" prop="remarks">
                <el-input type="textarea" maxlength="500" show-word-limit :autosize="{ minRows: 4, maxRows: 6 }" v-model="ruleForm.remarks"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button  type="danger" v-if="this.update"  @click="submitForm('x')">修改</el-button>
                <el-button type="primary" v-else  @click="submitForm('t')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: ['update'],
        data() {
            var phones = (rule, value, callback) => {
                let c=value.toString().length
                 if(c!==11){
                     callback(new Error('长度在11位'));
                 }else{
                     callback()
                 }
            }
            var qqs = (rule, value, callback) => {
                let c=value.toString().length
                if(c>11||c<7){
                    callback(new Error('长度在7-11位'));
                }else{
                    callback()
                }
            }


            return {
                ruleForm: {
                    name: '',
                    imagePath:'',
                    imageName:'',
                    imageSize:'',
                    phone:null,
                    qq:null,
                    remarks:'',
                    status:'',
                    openId:this.$userInfo.openId
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 6, message: '长度在 2 到 6 ', trigger: 'blur' }
                    ],
                    imageName: [
                        { required: true, message: '请选择头像', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入手机号',  },
                        { type: 'number', message: '年龄必须为数字值'},
                        { validator: phones, trigger: 'blur' }
                        //{ min: 11, max: 11, message: '长度在 11 ',  }
                    ],
                    qq: [
                        { required: true, message: '请输入QQ', },
                        { type: 'number', message: '年龄必须为数字值'},
                        { validator: qqs, trigger: 'blur' }
                        //{ min: 7, max: 11, message: '长度在 7 到 11 ', }
                    ],
                    remarks: [
                        { required: true, message: '请输入介绍', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度在 3 到 500 ', trigger: 'blur' }
                    ],
                },
                type:''
            }
        },
        methods: {
            submitForm(type) {
                let that=this

                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(type==='t'){
                            that.$refs.upImg.submit()
                        }else{
                            this.xiugai()
                        }
                        that.type=type
                    } else {
                        return false;
                    }
                });
            },
            xiugai(){
                let c=JSON.parse(JSON.stringify(this.ruleForm))
                this.$api.updateTeacher(c,res=>{

                })
                this.$api.changeGard({openId:this.$userInfo.openId,grade:'0'},res=>{

                })
                this.$api.examineTeacher({openId:this.$userInfo.openId,status:'0'},res=>{
                    if(res){
                        this.$router.push('/refresh')
                    }
                })
            },
            getImgPath(imgPath){ //上传成功
                    console.log(imgPath)
                    this.ruleForm.imagePath=imgPath
                    let c=JSON.parse(JSON.stringify(this.ruleForm))
                    c.phone=c.phone+''
                    c.qq=c.qq+''
                    console.log(c)
                if(this.type==='x'){
                    this.$api.updateTeacher(c,res=>{

                    })
                    this.api.changeGard({openId:this.userInfo.openId,status:'0'},res=>{
                        if(res){
                            this.$router.push('/refresh')
                        }
                    })
                }else{
                    this.$api.createTeacher(c,res=>{
                        if(res){
                            this.$router.push('/information')
                        }
                    })
                }
            },
            changeImg(file){ //选择图片
                this.ruleForm.imageName=file.name
                this.ruleForm.imageSize=file.size
            },
            updateForm(teacherInfo){
                this.ruleForm=JSON.parse(JSON.stringify(teacherInfo))
                this.ruleForm.imageName=teacherInfo.imagePath
            }
        },
        mounted() {
        },
        create() {
        },


    }
</script>

<style scoped lang='scss'>
    #box {
        width: 500px;
    }
</style>
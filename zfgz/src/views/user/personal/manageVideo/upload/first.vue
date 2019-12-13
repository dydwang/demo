<template>
    <div id="box">
        <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleFormFirst" label-width="80px" class="demo-ruleForm">
            <el-form-item label="课程图片">
                <user-image width="80px" height="80px"  :src="ruleForm.imagePath" />
            </el-form-item>
            <el-form-item label="课程名称" prop="courseName">
                <el-input v-model="ruleForm.courseName"></el-input>
            </el-form-item>
            <el-form-item label="课程介绍" prop="courseIntroduce">
                <el-input type="textarea" v-model="ruleForm.courseIntroduce"></el-input>
            </el-form-item>

            <el-form-item label="课程费用" prop="courseCharge">
                <el-switch
                        v-model="ruleForm.courseCharge"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="免费"
                        inactive-text="收费">
                </el-switch><br>
            </el-form-item>
            <el-form-item label="价格" prop="courseCharge"
                          v-show="!ruleForm.courseCharge">
                <el-input-number
                        v-show="!ruleForm.courseCharge"
                        v-model="ruleForm.coursePrice"  :min="0">
                </el-input-number>元
            </el-form-item>
            <el-form-item label="免费节数" prop="courseCharge" v-show="!ruleForm.courseCharge">
                <el-input-number
                        v-model="ruleForm.freeNode"  :min="1" :max="6" :step="1" :step-strictly="true">
                </el-input-number>节
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "first",
        props: ['courseList'],
        data() {
            return {
                ruleForm:this.courseList,
                rules: {
                    courseName: [
                        { required: true, message: '请输入课程名称', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 ', trigger: 'blur' }
                    ],
                    imageName: [
                        { required: true, message: '请选择课程图片', trigger: 'blur' },
                    ],
                    courseIntroduce: [
                        { required: true, message: '请输入课程介绍', trigger: 'blur' },
                        { min: 2, max: 50, message: '长度在 2 到 50 ', trigger: 'blur' }
                    ],
                    courseCharge: [
                        { required: true, message: '请选择是否收费', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            submitForm() {
                let blear
                this.$refs.ruleFormFirst.validate((valid) => {
                    if (valid) {
                        blear= true
                    } else {
                        this.$message.error('请填写完整')
                        blear= false;
                    }
                });
                return blear
            },

            submitImg(){
                this.$refs.upImg.submit()
            },
            getImgPath(imgPath){ //上传成功
                this.ruleForm.imagePath=imgPath
                this.course()
            },
            changeImg(file){ //选择图片
                this.ruleForm.imageName=file.name
                this.ruleForm.imageSize=file.size
            },
            createCourse(time){
                this.ruleForm.courseId=time
                this.course()
                //this.$refs.upImg.submit()
            },
            course(){//创建课程
                this.ruleForm.courseCharge+=''
                this.$api.createCourse((this.ruleForm),res=>{

                })
            }
        },
        mounted() {

        },
        created() {
            this.ruleForm.courseCharge=this.ruleForm.courseCharge === "true"
        },
    }
</script>

<style scoped lang='scss'>
    #box {
        .el-form{
            margin-top: 20px;
            width: 500px;
        }
    }
</style>
<template>
    <div id="box">
        <p style="text-align: center;font-size: 24px">上传课程</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="width: 50%;margin-left: 25%" label-width="100px" class="demo-ruleForm">
            <el-form-item label="课程名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "first",
        props: ['courseId','ruleForm'],
        data() {
            return {
                rules:{
                    name: [
                        { required: true, message: '请输入课程名称', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            verification(call){//表单验证
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        call(true)
                    } else {
                        this.$message.warning('请输入课程名称')
                    }
                });
            },
            createCourse(){
                let cnt={
                    courseId:this.courseId,
                    name:this.ruleForm.name
                }
                this.$api.updateCourse(cnt,res=>{

                })

            }
        },
        mounted() {
        },
        created() {
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
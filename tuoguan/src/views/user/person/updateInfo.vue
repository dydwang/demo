<template>
    <div id="box">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">

            <el-form-item label="账号">
                <div>{{this.$userInfo.username}}</div>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="updateUser">修改</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "updateInfo",
        props: [''],
        data() {
            return {
                ruleForm: {
                    name:JSON.parse(JSON.stringify(this.$userInfo)).name,
                    password:JSON.parse(JSON.stringify(this.$userInfo)).password,
                    userId:this.$userInfo.userId,
                    grade:this.$userInfo.grade,
                    username:this.$userInfo.username,
                },
                rules:{
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],

                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            updateUser(){
                let cnt =this.ruleForm

                this.verification(r=>{
                    this.$api.updateUser(cnt,res=>{
                        if(res){
                            this.$message.success('修改成功')
                            this.$userInfo=this.ruleForm
                            sessionStorage.setItem('userInfoZFGZ',JSON.stringify(this.ruleForm))

                            setTimeout(()=>{
                                this.$router.go(0)
                            },1000)
                        }else{
                            this.$message.error('修改失败')
                        }
                    })
                })
            },
            verification(call){//表单验证
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        call(true)
                    } else {
                        this.$message.warning('请输入完整')
                    }
                });
            },
        },
        mounted() {
        },
        created() {
            sessionStorage.clear()
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
<template>
    <div id="box">
        <el-dialog
                title='注册'
                :visible.sync="dialogVisible"
                width="30%"
        >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="signUp">注册</el-button>
            <el-button type="primary" @click="dialogVisible=false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        props: [''],
        data() {
            return {
                dialogVisible:false,
                ruleForm: {
                    name:'',
                    username:'',
                    password:'',
                    userId:Date.now()
                },
                rules:{
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            changeDia(d){
                this.dialogVisible=d
            },
            signUp(){
                let cnt =this.ruleForm

                this.verification(r=>{
                    this.$api.signUp(cnt,res=>{
                        if(res) {
                            sessionStorage.setItem('userInfoZFGZ',JSON.stringify(this.ruleForm))
                            this.$router.go(0)
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
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
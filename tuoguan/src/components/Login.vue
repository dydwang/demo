<template>
    <div id="box">
        <el-dialog
                title='登陆'
                :visible.sync="dialogVisible"
                width="30%"
               >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="signUp">注册</el-button>
            <el-button type="primary" @click="login">登陆</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props: [''],
        data() {
            return {
                dialogVisible: false,
                ruleForm: {
                    username:'',
                    password:''
                },
                rules:{
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
            login(){
                this.verification(r=>{
                    console.log('后台获取')
                    let cnt=this.ruleForm
                    let that=this
                    this.$api.login(cnt,res=>{
                        if(res.length){
                            that.$message.success('登陆成功')
                            that.dialogVisible=false
                            that.$userInfo=res[0]
                            that.$router.go(0)
                            sessionStorage.setItem('userInfoZFGZ',JSON.stringify(res[0]))
                        }else{
                            this.$message.error('账号或密码错误')
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
            signUp(){
                this.dialogVisible = false
                this.$emit('signUp')
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
<template>
    <div id="box">
        <p style="text-align: center;font-size: 24px">新建学校</p>
        <el-form
                style="width: 500px;margin: 0 auto"
                :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="名称" prop="schoolName">
                <el-input v-model="ruleForm.schoolName"></el-input>
            </el-form-item>

            <el-form-item label="托管" prop="schoolMain">
                <el-select v-model="ruleForm.schoolMain" placeholder="请选择">
                    <el-option
                            v-for="(item,index) in ['早托','午托','晚托','临时托管','全托']"
                            :key="index"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="年纪" prop="schoolGrade">
                <el-select v-model="ruleForm.schoolGrade" multiple placeholder="请选择">
                    <el-option
                            v-for="(item,index) in ['幼儿','小学','初中','高中']"
                            :key="index"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程" prop="schoolCourse">
                <el-select v-model="ruleForm.schoolCourse" multiple placeholder="请选择">
                    <el-option
                            v-for="(item,index) in ['数学','语文','英语','手艺','物理','化学','生物','地理','历史','思修']"
                            :key="index"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="地址" prop="schoolAddress">
                <el-input v-model="ruleForm.schoolAddress"></el-input>
            </el-form-item>
            <el-form-item label="联系" prop="schoolPhone">
                <el-input v-model="ruleForm.schoolPhone"></el-input>
            </el-form-item>
            <el-form-item label="价格/天" prop="schoolPrice">
                <el-input v-model="ruleForm.schoolPrice"></el-input>
            </el-form-item>
        </el-form>
        <div style="margin: 0 40%">
            <el-button type="primary"  @click="createSchool">创建</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create",
        props: [''],
        data() {
            return {
                ruleForm: {
                    schoolGrade:'',
                    schoolName:'',
                    schoolMain:'',
                    schoolAddress:'',
                    schoolPhone:'',
                    schoolCourse:'',
                    schoolPrice:0,
                    schoolId:Date.now()
                },
                rules:{
                    schoolGrade: [
                        { required: true, message: '请输入托管年纪', trigger: 'blur' },
                    ],
                    schoolName: [
                        { required: true, message: '请输入校区名称', trigger: 'blur' }
                    ],
                    schoolMain: [
                        { required: true, message: '请输入托管范围', trigger: 'blur' },
                    ],
                    schoolAddress: [
                        { required: true, message: '请输入地址', trigger: 'blur' }
                    ],
                    schoolPhone: [
                        { required: true, message: '请输入联系方式', trigger: 'blur' },
                    ],
                    schoolCourse: [
                        { required: true, message: '请输入课程', trigger: 'blur' }
                    ],
                    schoolPrice: [
                        { required: true, message: '请输入价格', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            createSchool(){
                this.verification(r=>{
                    let cnt =JSON.parse(JSON.stringify(this.ruleForm))

                    cnt.schoolCourse=this.ruleForm.schoolCourse.reduce((total, value) =>{
                        return total + ','+value;
                    })

                    cnt.schoolGrade=this.ruleForm.schoolGrade.reduce((total, value) =>{
                        return total + ','+value;
                    })
                    console.log(cnt)
                    this.$api.schoolCreate(cnt,res=>{
                        if(res){
                            this.$message.success('创建成功')
                            this.$refs.ruleForm.resetFields();
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
        width: 100%;
    }
</style>
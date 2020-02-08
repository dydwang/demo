<template>
    <div id="box">
        <p style="text-align: center;font-size: 24px">招聘</p>
        <el-form style="width: 50%;margin: 0 auto" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="出生年月" prop="age">
                <el-date-picker
                        v-model="ruleForm.age"
                        type="year"
                        format="yyyy"
                        value-format="yyyy"
                        placeholder="选择年">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="任职校区" prop="school">
                <el-select v-model="ruleForm.school" @change="getCourse" placeholder="请选择">
                    <el-option
                            v-for="(item,index) in tableSchool"
                            :key="index"
                            :label="item.schoolName"
                            :value="item.schoolId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任职科目"    prop="course">
                <el-select v-model="ruleForm.course"  multiple placeholder="请选择">
                    <el-option
                            v-for="(item,index) in tableCourse"
                            :key="index"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="期望薪水" prop="salary">
                <el-input v-model="ruleForm.salary"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
        </el-form>

        <el-button type="primary" @click="submitForm" style="width: 50%;margin-left: 25%" >提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "recruit",
        props: [''],
        data() {
            return {
                tableSchool:[],
                tableCourse:[],
                ruleForm: {
                    name:'',
                    age:'',
                    school:'',
                    teacherId:Date.now(),
                    phone:'',
                    salary:'',//薪水，
                    status:'0',
                    course:''
                },
                rules:{
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],
                    age: [
                        { required: true, message: '请输入年龄', trigger: 'blur' },
                    ],
                    school: [
                        { required: true, message: '请输入校区', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                    ],
                    salary: [
                        { required: true, message: '请输入薪水', trigger: 'blur' },
                    ],
                    course: [
                        { required: true, message: '请输入课程', trigger: 'blur' },
                    ],

                }
            }
        },
        methods: {
            submitForm(){
                let cnt =JSON.parse(JSON.stringify(this.ruleForm))
                cnt.course=''
                this.ruleForm.course.forEach((val)=>{
                    cnt.course+=val+','
                })

                this.verification(r=>{
                    this.$api.addTeacher(cnt,res=>{
                        if(res) {
                            this.$message.success('提交成功')
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
            getCourse(value){
                let tableCourse
                tableCourse=this.tableSchool.filter(val=>{
                    return val.schoolId===value
                })
                this.tableCourse=tableCourse[0].schoolCourse.split(',')
            }
        },
        mounted() {
            this.$api.getSchool({},res=>{
                if(res) this.tableSchool=res
            })
        },
        created() {
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
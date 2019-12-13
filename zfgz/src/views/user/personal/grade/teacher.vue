<template>
    <div id="box">
        <el-form label-position="left" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item  >
                <user-image width="60px" height="60px" :src="teacherInfo.imagePath" />
            </el-form-item>
            <el-form-item label="姓名:" >
                {{teacherInfo.name}}
            </el-form-item>
            <el-form-item label="Q Q:" >
                {{teacherInfo.qq}}
            </el-form-item>
            <el-form-item label="手机:" >
                {{teacherInfo.phone}}
            </el-form-item>
            <el-form-item label="介绍:" >
                {{teacherInfo.remarks}}
            </el-form-item>
            <el-form-item label="审核:" >
                <span :class="{'warn':teacherInfo.status==='1','success':teacherInfo.status==='2','now':teacherInfo.status==='0'}">
                    {{teacherInfo.status==='0'?'审核中':(teacherInfo.status==='2'?'审核通过':'审核未通过')}}
                </span>
            </el-form-item>
            <el-form-item  v-if="teacherInfo.status!=='0'">
                <el-button type="danger" @click="update()"> 修改信息 </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: ['teacherInfo'],
        data() {
            return {

            }
        },
        methods: {
            update(){
                this.$emit('updateTeacher')
            }
        },
        mounted() {
        },
        create() {
        },

//a09dc8e0e95f6ce8630fe2de9155f7e8
    }
</script>

<style scoped lang='scss'>
    #box {
        width: 500px;
        margin-left: 50px;
        margin-top: 50px;
        .warn{
            color:red;
        }
        .success{
            color:green;
        }
        .now{
            color:black;
        }
        .el-form-item{
            margin-bottom: 10px;
        }
    }
</style>
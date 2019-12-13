<template>
    <div id="main">
        <el-select v-model="status" placeholder="请选择" @change="changeSatus">
            <el-option
                    v-for="item in statusList"
                    :key="item.status"
                    :label="item.label"

                    :value="item.status">
            </el-option>
        </el-select>

        <el-table
                :data="tableData"
                style="width: 96%;margin-left: 2%">
            <el-table-column
                    prop="imagePath"
                    label="头像">
                <template slot-scope="scope">
                    <user-image :src="scope.row.imagePath"></user-image>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="手机号">
            </el-table-column>
            <el-table-column
                    v-if="status==='0'"
                    label="审核">
                    <template slot-scope="scope">
                        <el-button type="text" @click="examineTeacher(scope,'2')">通过</el-button>
                        <el-button type="text" style="color: red" @click="examineTeacher(scope,'1')">未通过</el-button>
                    </template>
            </el-table-column>
        </el-table>
        <next-page @next="selectTeacher" ref="nextPage"></next-page>
    </div>
</template>

<script>
    export default {
        name: "teacher_details",
        props: [''],
        data() {
            return {
                tableData:[],
                statusList:[{label:'待审核',status:'0'},{label:'审核未通过',status:'1'},],
                status:'0'
            }
        },
        methods: {
            changeSatus(){
                let c={
                    count:10,
                    offset:0,
                    status:this.status
                }
                this.selectTeacher(c)
                this.$refs.nextPage.defaultPage()
            },
            selectTeacher(c){
                c.status=this.status
                this.$api.selectTeacher(c,res=>{
                    this.tableData=res
                    this.$refs.nextPage.judge(res.length)
                })
            },
            examineTeacher(scope,status){
                let c={
                    openId:scope.row.openId,
                    status:status
                }
                this.$api.examineTeacher(c,res=>{
                    if(res){
                        this.tableData.splice(scope.$index,1)
                    }
                })
                if(status==='2'){
                    c.grade='1'
                    this.$api.changeGard(c,res=>{

                    })
                }
            }
        },
        mounted() {
            let c={
                count:10,
                offset:0,
                status:this.status
            }
            this.selectTeacher(c)
        },
        create() {
        },
    }
</script>

<style scoped lang='scss'>
    #main {
        height: 100px;
    }
</style>
<template>
    <div id="box">
        <el-row :gutter="20" >
            <el-col style="margin-bottom: 20px" v-for="(item,index) in tableData" :key="index" :span="6">
                <school-box :item="item" :index="index"></school-box>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import schoolBox from './schoolBox'
    export default {
        name: "index",
        props: [''],
        data() {
            return {
                tableData:[{
                        schoolName:'东方托管所' ,
                        schoolMain:'全托',
                        schoolId:123456,
                        schoolPhone:123546,
                        schoolGrade:'小学，初中，高中',
                        schoolAddress:'贵州省贵阳市',
                        schoolCourse:'语文，英语，数学',
                        schoolPrice:300
                }]
            }
        },
        methods: {

        },
        mounted() {
            this.$api.getSchool({},res=>{
                if(res) this.tableData=res
            })
        },
        created() {
            this.$resetSetItem('activeIndex',1)
        },
        components:{
            schoolBox
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
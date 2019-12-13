<template>
    <div id="box">
        教师信息
    </div>
</template>
<script>
    export default {
        name: "teacherInfo",
        props: [''],
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        create(){
            //如果没有传值 返回首页
            let query=this.$route.query
            if(!query){
        this.$router.push('/company')
    }
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
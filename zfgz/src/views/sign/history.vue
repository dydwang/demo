<template>
    <div>
        <div v-for="item in 3">
            <el-row style="margin-top: 10px">
                <el-col :span="10">
                    <img style="width: 90px;height: 60px;border-radius: 5px" src="http://thirdqq.qlogo.cn/g?b=sdk&k=jZoOrUgNvyYiblMN750yeQg&s=140&t=1574006960">
                </el-col>
                <el-col :span="14" >观看的某个视频</el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "history"
    }
</script>

<style scoped>

</style>
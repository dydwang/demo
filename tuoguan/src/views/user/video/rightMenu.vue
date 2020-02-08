<template>
    <div id="box">
        <p style="text-align: center">{{courseOb.name}}</p>
        <ul>
            <li v-for="(item,index) in tableData">
                <el-button type="text" @click="startVideo(item.videoPath)" >{{item.indexs+1}} -- {{item.videoName}}</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "rightMenu",
        props: ['courseOb','tableData'],
        data() {
            return {}
        },
        methods: {
            startVideo(path){
                this.$emit('startVideo',path)
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
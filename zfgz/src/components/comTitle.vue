<template>
    <div class="title">{{text}}</div>
</template>

<script>
    export default {
        name: "comTitle",
        props:['text']
    }
</script>

<style scoped>
    .title{
        color: #2d2a2a;
        font-weight: 600;
        font-size: 22px;
        margin: 0 auto 50px ;
        text-align:center;
        font-family:"PingFang SC";
    }
</style>
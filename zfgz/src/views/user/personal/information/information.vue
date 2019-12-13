<template>
    <div style="margin-left: 50px;margin-top: 50px">
        <p>名称：{{$userInfo.nickname}}</p>
        <p>性别：{{$userInfo.gender}}</p>
        <p>年龄：{{$userInfo.year}}</p>
        <p>权限：{{$userInfo.grade===1?'教师':'普通用户'}}</p>
        <p>地址：{{$userInfo.province}}{{$userInfo.city}}</p>

    </div>
</template>

<script>
    export default {
        name: "information",

    }
</script>

<style scoped>

</style>
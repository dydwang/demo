<template>
    <img :style="{width: width,height: height,borderRadius:borderRadius }"
         :src="src!==''?imgUrl+src:($userInfo!==null?($userInfo.figureurl_qq_2?$userInfo.figureurl_qq_2:$userInfo.figureurl_qq_1):'')"
         type='image/png;image/gif;image/jpg;'
    >
</template>

<script>

    export default {
        name: "userImage",
        data() {
            return {
                imgUrl:this.$nodeUrl+'video/getImg?imagePath='
            }
        },
        methods: {
        },
        mounted() {
        },
        create: {},
        props: {
            width:{
                type: String,
                default: "40px"
            },
            height:{
                type: String,
                default: "40px"
            },
            borderRadius:{
                type: String,
                default: "0"
            },
            src:{
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped lang='scss'>

</style>
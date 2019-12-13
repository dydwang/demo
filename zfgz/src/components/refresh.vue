<template>
    <div id="box">
    </div>
</template>

<script>
    export default {
        name: "refresh",
        props: [''],
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        created() {
            this.$router.go(-1)
        },
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
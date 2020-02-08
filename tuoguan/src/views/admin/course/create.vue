<template>
    <div id="box">
        <two></two>
    </div>
</template>

<script>

    import two from './two'
    import three from './three'
    export default {
        name: "create",
        props: [''],
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        created() {
        },
        components:{
            two,three
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
<template>
    <div>history</div>
</template>

<script>
    export default {
        name: "history",
        methods:{
            p(){
                let p=new Promise(function(resolve, reject){
                    setTimeout(()=>{
                      console.log(1)
                    },100)
                })
                for(let i;i<10;i++){
                    p()
                }
            }
        },
        mounted() {
            this.p()
        }
    }
</script>

<style scoped>

</style>
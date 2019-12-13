<template>
    <div>
        <carousel></carousel>
        <introduce ></introduce>
        <team ></team>
        <about></about>
    </div>
</template>

<script>
    const about = ()=>import('./about')
    const team = ()=>import('./team')
    import carousel from "./carousel"
    import introduce from "./introduce"
    // import about from "./about"
    // import team from "./team"

    export default {
        name: "index",
        data(){
            return{
                showIntro:false,
                showTeam:false
            }
        },
        components:{
            carousel,introduce,team,about
        },
        methods:{
            login(){
                let that=this
                this.$resetSetItem('activeIndex', '1');
                if(QC.Login.check()&&this.$userInfo===null){  //如果没有登陆
                    QC.Login.getMe(function(openId, accessToken){
                        console.log(openId)
                        if(openId){
                            getUser(openId, accessToken)
                        }
                    })
                }else{
                    this.$api.createUsers(this.$userInfo,r=>{

                    })
                }
                function getUser(openId, accessToken) {
                    that.$api.getUser({openId, accessToken},(res)=>{
                        if(res.nickname){
                            res.openId=openId
                            res.accessToken=accessToken
                            sessionStorage.setItem('userInfoZFGZ',JSON.stringify(res))
                            that.$userInfo=res
                            that.$router.go(0)
                        }
                    })
                }
            }
        },
        mounted() {
            // localStorage.clear()
            // sessionStorage.clear()
            // this.$userInfo=null
            this.login()
        },
    }
</script>

<style scoped>

</style>
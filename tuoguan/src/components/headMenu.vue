<template>
    <div class="home">
        <el-container>
            <el-header height="60px" id="header">
                <div class="pageTitle">
                    <div class="WebTitle">托管平台</div>
                </div>

                    <div class="el-icon-user-solid user" @click="clickUser"></div>
                <mymenu></mymenu>
                <el-divider></el-divider>

            </el-header>
        </el-container>

        <sign-up ref="signUp"></sign-up>
        <login ref="login" @signUp="signUp"></login>
    </div>
</template>

<script>
    import mymenu from './menu'
    export default {
        data(){
            return{

            }
        },
        methods:{
            clickUser(){
                console.log(this.$userInfo)
               if(this.$userInfo===null){
                    this.$refs.login.changeDia(true)
               }else{
                   this.$router.push('person')
               }

            },
            signUp(){
                this.$refs.signUp.changeDia(true)
            }
        },
        components: {
            mymenu
        },
        created() {
          //  this.$router.push('person')
        }
    }
</script>
<style scoped lang="scss">
    $iconSize:40px;      //图标大小
    $headerHeight:60px;  //头高度
    $iconCenter:( $headerHeight - $iconSize )/2;//图标居中

    $fontSize:24px;//标题大小
    $fontCenter:$headerHeight - $iconCenter - $fontSize - 10;//字体与图标对其


    $titleIconSize:24px;
    .home{

        .el-main{
            height: 100%;
            flex-wrap: wrap;
            -webkit-flex-wrap: wrap; /* Safari 6.1+ */
            display: flex;
            padding: 20px 0;
            width: auto;
            min-width: 900px;
            margin:$headerHeight 100px 0 100px ;
        }
        .el-header{
            min-width: 1100px;
            z-index: 100;
            position: fixed;
            top: 0;
            width: 100%;
            padding: 0 100px;
            background-color: rgba(255,255,255);
            &>div{float: left;}
            .pageTitle{
                width: 270px;
                height: 100%;
                .WebIcon{
                    padding: $iconCenter 0;
                    width: 120px;
                    height: $iconSize;
                }
                .WebTitle{
                    font-size: $fontSize;
                    margin-top: $fontCenter;
                    font-weight: 500;
                    color:#3a3636
                }
                &>div{
                    float: left;
                }
            }
            .el-divider{
                background-color: #c1daf5;
            }
            .el-divider--horizontal{
                margin: 0;
            }
            .user{
                border:0;
                float: right;
                width:$titleIconSize;
                height: $titleIconSize;
                font-size: $titleIconSize;
                border-radius: $titleIconSize/2;
                background-color: #66b1ff;
                overflow: hidden;
                color: #fff;
                margin-top: $headerHeight - $titleIconSize - $iconCenter;
                margin-right: 40px;
            }
            .titleIcon{
                font-size: $titleIconSize;
                float: right;
                margin-right: 15px;
                margin-top: $headerHeight - $titleIconSize - $iconCenter;
                color: #6c7079;
            }
        }

        .suspension{
            height: 80px;
            width: 40px;
            position: fixed;
            right: 20px;
            bottom: 100px;

        }


    }
</style>
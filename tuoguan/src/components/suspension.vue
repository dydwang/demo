<template>
    <div class="xuanfu">
                <el-tooltip class="item" effect="dark" content="联系客服" placement="left-end">
                    <div class="box tuo-icon-qq" @click="openQQ"></div>
                </el-tooltip>
        <el-tooltip class="item" effect="dark" content="招聘" placement="left-end">
            <div class="box tuo-icon-zhaopin" @click="recruit"></div>
        </el-tooltip>

    </div>
</template>

<script>
    export default {
        name: "suspension",
        methods:{
            openQQ(){//打开小窗口进行qq聊天
                const href = "http://wpa.qq.com/msgrd?v=3&uin=2374295886&site=qq&menu=yes"
                let qq=window.open(href,"name", "height=100, width=100, top=200, left=200, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no")
            setTimeout(()=>{
                qq.close()
            },5000)
            },
            recruit(){
                this.$router.push('/recruit')
            }
        }
    }
</script>

<style scoped lang="scss">
    .xuanfu{
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .box{
            height: 30px;
            width: 30px;
            padding: 5px;
            font-size: 30px;
            color: #66b1ff;
        }

        .el-divider--horizontal{
            margin: 0;
        }


    }


</style>
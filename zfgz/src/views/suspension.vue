<template>
    <div class="xuanfu">
                <div class="box">
                    <el-popover
                            placement="left-start"
                            width="100"
                            trigger="hover">
                        <img  style="width: 120px;height: 120px;margin-left: 14px" src="@/assets/image/weixin.png">
                        <div style="margin: 0 auto;text-align: center">关注微信公众号</div>
                        <img slot="reference" style="width: 30px;height: 30px" src="@/assets/image/weixin.png">
                    </el-popover>

                </div>

                <el-tooltip class="item" effect="dark" content="联系客服" placement="left-end">
                    <!--<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3010136674&site=qq&menu=yes"><div class="box zf-icon-qq"></div></a>-->
                    <div class="box zf-icon-qq" @click="openQQ"></div>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="招聘合作" placement="left-end">
                    <!--<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3010136674&site=qq&menu=yes"><div class="box zf-icon-qq"></div></a>-->
                    <div style="font-size: 26px;margin: 5px;color:#585252" @click="$router.push('/recruit')" class="zf-icon-drxx59"></div>
                </el-tooltip>
    </div>
</template>

<script>
    export default {
        name: "suspension",
        methods:{
            openQQ(){//打开小窗口进行qq聊天
                const href = "http://wpa.qq.com/msgrd?v=3&uin=3010136674&site=qq&menu=yes"
                let qq=window.open(href,"name", "height=100, width=100, top=200, left=200, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no")
            setTimeout(()=>{
                qq.close()
            },3000)
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
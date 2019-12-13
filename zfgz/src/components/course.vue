<template>
    <div id="course"  style="overflow:auto">
                <div v-for="(item,index) in tableData" :key="index" class="box list-item" @click="courseDetails(item)">
                    <user-image width="100%" height="124px" :src="item.imagePath" style="margin-bottom: 8px"></user-image>
                    <div style="max-height: 42px;overflow: hidden">{{item.courseName}}</div>
                    <div style="font-size: 12px;color:#909399;height: 16px">{{item.courseIntroduce}}</div>
                    <div class="price" >
                        <div style="color: #f4621f">{{item.courseCharge===true?'免费':'￥'+item.coursePrice}}</div>
                        <div style="color: #909399;font-size: 12px;line-height: 24px;margin-left: 10px">{{item.clickNum}}次学习</div>
                        <div class="teacher">{{item.name}}</div>
                    </div>
                </div>
    </div>
</template>

<script>
    export default {
        name: "course",
        props: ['tableData'],
        methods:{
            courseDetails(item){
                let router=this.$router.resolve({
                    path: '/courseDetails',
                    query: item
                })
                window.open(router .href, '_blank');
            }
        }
    }
</script>

<style scoped lang="scss">
    #course {
        .box {
            width: 220px;
            height: 216px;

            float: left;
            padding: 7px;
            margin: 0 5px 15px 0;
            &:hover{
                -webkit-box-shadow:  2px 2px 2px #e4e4e4;
                box-shadow:          2px 2px 2px #e4e4e4;
                -moz-box-shadow:     2px 2px 2px #e4e4e4;
            }
        }
        .number {
            width: 100%;
            height: 16px;
            margin-top: 6px;
            color: #909399;
            font-size: 12px;

            & > div {
                float: left;
            }



        }
        .el-divider--vertical {
            height: 16px;
        }
        .price{
            margin-top: 6px;
            height: 24px;width: 100%;
            &>div{
                float: left;
            }
            .teacher {
                overflow: hidden;
                height: 24px;
                width: 100px;
                font-size: 12px ;
                color:#909399;
                line-height: 24px;
                margin-left: 6px;
            }
        }

    }

</style>
<template>
    <div id="box" @click="toSchoolView">
        <el-card class="box-card" shadow="hover" >
            <img :src="require('@/assets/school/'+index%10+'.png')" width="100%" height="140px">
            <div class="text">项目：{{item.name}}</div>
            <div class="text" style="font-size: 14px;color: red;">价格：￥{{item.price}}/天</div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "schoolBox",
        props: ['item','index'],
        data() {
            return {}
        },
        methods: {
            toSchoolView(){
                this.$router.push({
                    path: '/schoolView',
                    query: {
                        index: this.index,
                        item:this.item,
                    }
                })
            }
        },
        mounted() {
        },
        created() {
        },

    }
</script>

<style scoped lang='scss'>
    #box {
        .text{
            font-size: 12px;
            color: #909399;
        }
    }
</style>
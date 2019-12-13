<template>
    <div class="introduces">
        <com-title text="公司介绍"></com-title>
        <el-collapse-transition>

        <el-row >
            <el-col :offset="3" :span="9" :sm="11" :md="11" :lg="9" :xs="11">
                <img style="width: 400px;height: 288px" src="@/assets/image/intro.jpg">
            </el-col>
            <el-col :offset="1" :span="9" :xs="8">
                <div class="jiesao">
                    贵州中孚格致工程技术有限公司成立于2017年10月12日，是一家集工程咨询、效果图渲染、装饰装修设计、
                    水利水电设计及BIM的小型综合性工程技术企业。公司目前设有市场策划部、造价部、信息部、设计部、培训
                    部等5个部门，经过一年来的努力与发展，已具一定的规模及实力，现拥有一支技术精湛的BIM服务团队，以卓
                    越的服务品质、专业安全的技术服务实力，为不同群体的用户提供更高更优质的BIM服务。发展实业、振兴企业是
                    企业的发展木匾，不骄不躁、严谨踏实是公司的一贯工作作风。
                    我们公司秉承“诚信为本，实力为先，全心全意为客户"的经营理念，以卓越的BIM服务品质、专业的技术
                    服务实力、技术精湛的客户服务团队，保障客户在信息时代的高速路上驰骋，又以稳固、发展、忠诚、高效、
                    团结与创新的精神，尊重人才注重技术，使客户在享受信息科技发展最新成果的同时不断获得最大的利益。
                </div>
            </el-col>
        </el-row>
        </el-collapse-transition>
    </div>
</template>

<script>
    export default {
        props:[],
        name: "introduce",
        data(){
            return{
               // show:false
            }
        },
        methods:{

        },
        mounted() {
        },

    }
</script>

<style scoped lang="scss">
 .introduces{
     margin-top: 60px;
     height: 500px;

     .jiesao{
         color: #564f4f;
         text-indent: 2em;
         font-family:  Helvetica Neue;
         font-size: 12px;
     }

 }
</style>
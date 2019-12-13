<template>
    <div id="about">

        <el-row style="padding: 30px 10% 50px 10%;background-color: #2a2a2a" >
            <el-col :span="6" v-for="(item,index) in list" :key="index">

                <div style="font-size: 18px;color: #d6c5c5">{{item.name}}</div>
                <ul style="padding: 0;">
                    <li id="list" style=""
                        v-for="(i,id) in item.l" :key="id" >
                        <span @click="toUrl(i.url,index)">{{i.name}}</span></li>
                </ul>
            </el-col>
            <el-col :span="24">
                 <el-divider content-position="left"></el-divider>
            </el-col>
            <el-col :span="24">
                <div style="margin: 0 auto;text-align: center;color: #666;font-size: 12px" >Copyright ©2019 中孚格致  黔ICP备19008662</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return{
                list:[
                    {name:'友情链接',l:[{name:'IPPCE研究所',url:'http://www.ippce2015.com/'},{name:'贵州理工学院',url:'http://www.git.edu.cn/'}]},
                    {name:'合作单位',l:[{name:'深圳优立全息科技有限公司',url:'http://www.euclideon.com.cn/'},{name:'北京超图软件股份有限公司',url:'https://www.supermap.com/cn/'},
                                      {name:'广联达科技股份有限公司',url:'https://www.glodon.com/'},{name:'晨曦信息科技股份有限公司',url:'http://www.chenxisoft.com.cn/CxSoft/Home/Home'},
                                        {name:'四川开元工程项目管理咨询有限公司',url:'https://www.sckyzx.com/'},{name:'金中证项目管理有限公司',url:'http://www.jzzxmgl.com/'}]},
                    {name:'联系我们',l:[{name:'Q Q',url:''},{name:'微信',url:''},{name:'电话',url:''},{name:'地址',url:''}]},
                    {name:'技术支持',l:[{name:'杨燊 1425115385',url:''},{name:'王诚 1836963576',url:''},{name:'杜辛 761082014',url:''}]},
                ]
            }
        },
        methods:{
            toUrl(e,id){
                console.log(id)
                if(id<2) {window.open(e)}
            }
        }
    }
</script>

<style scoped lang="scss">
    #about{
        #list{
            font-size: 12px;list-style:none;margin-bottom: 5px;color: #979797;
            &>span:hover{
                color:#ffffff;
            }
        }
        .el-divider{
            background-color:#666 ;
            width: 70%;
            margin-left: 15%;
        }
    }
</style>
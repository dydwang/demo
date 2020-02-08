<template>
    <div id="box">
        <img :src="require('@/assets/school/'+index%10+'.png')" width="100%" height="400px">
        <div>
            <div style="font-weight: 600;font-size: 24px">{{item.schoolName}}</div>
            <div class="text">托管：{{item.schoolMain}}</div>
            <div class="text">年纪：{{item.schoolGrade}}</div>
            <div class="text">课程：{{item.schoolCourse}}</div>
            <div class="text">地址：{{item.schoolAddress}}</div>
            <div class="text">联系：{{item.schoolPhone}}</div>

            数量：<el-select v-model="num" placeholder="数量">
            <el-option
                    v-for="item in 100"
                    :key="item"
                    :value="item">
            </el-option>
        </el-select>
            <div class="text" style="color: red;">价格：￥{{item.schoolPrice}}/天</div>
        </div>


        <p style="text-align: center;font-size: 24px">娱乐项目</p>
        <el-row :gutter="20" style="margin-top: 20px">
            <el-col style="margin-bottom: 20px" v-for="(item,index) in tableData" :key="index" :span="6">
                <el-card class="box-card" shadow="hover" >
                    <img :src="require('@/assets/school/'+index%10+'.png')" width="100%" height="140px">
                    <div class="text">项目：{{item.name}}</div>
                    <div class="text" style="font-size: 14px;color: red;">价格：￥{{item.price}}/天</div>
                    数量：
                    <el-input-number v-model="item.num" :min="0" @change="handleChange" :max="100" label="描述文字"></el-input-number>
                </el-card>
            </el-col>
        </el-row>
        <div style="margin-top: 15px;float: right;margin-bottom: 50px">
            <span style="color: red;font-size: 24px">总价：{{item.schoolPrice*num+playPrice}}</span>
            <el-button type="primary" @click="shopCar">加入购物车</el-button>
        </div>


    </div>
</template>

<script>
    import playBox from './playBox'
    export default {
        name: "schoolView",
        props: [''],
        data() {
            return {
                item:null,
                index:0,
                num:1,
                tableData:[{
                    schoolId:123,
                    name:'篮球场',
                    playId:'456',
                    price:789,
                },{
                    schoolId:123,
                    name:'篮球场',
                    playId:'456',
                    price:789,
                }],
                playPrice:0
            }
        },
        methods: {
            shopCar(){
                let list={
                    name:this.item.schoolName,
                    num:this.num,
                    price:this.item.schoolPrice*this.num
                }
                let playList=this.tableData.filter(val=>{
                    return val.num>0
                })
                playList.forEach(val=>{
                    val.name+='('+list.name+')'
                    val.price=val.price*val.num

                })
                this.$store.state.shopCar.push(list,...playList)
                localStorage.setItem('shopCar',JSON.stringify(this.$store.state.shopCar))
                this.$message.success('加入购物车')
            },
            nowShop(){

            },
            handleChange(){
                let price=0
                this.tableData.forEach((val,index)=>{
                    price+=val.price*val.num
                })
                this.playPrice=price
            }
        },
        mounted() {
            this.tableData.forEach((val,index)=>{
                val.num=0
            })

        },
        created() {
            this.item=this.$route.query.item
            this.index=this.$route.query.index
            if(typeof this.item==='string'){
                this.$router.push('/')
            }

        },
        components:{
            playBox
        }
    }
</script>

<style scoped lang='scss'>
    #box {

    }
</style>
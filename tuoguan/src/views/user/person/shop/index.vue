<template>
    <div id="box">
        <p style="text-align: center;font-size: 24px">购物车</p>
        <el-button style="float: right" type="primary" @click="deleteShopCar" >清空购物车</el-button>
        <el-table
                ref="multipleTable"
                :data="carList"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="商品数量"
                    prop="num">
            </el-table-column>
            <el-table-column
                    label="商品价格/天"
                    prop="price">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" style="color: red" @click="deleteShop(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div style="float: right;margin-top: 10px">
            <span style="font-size: 24px;color: red;">总价格：￥{{allPrice}}</span>
            <el-button type="danger" @click="addPay">立即购买</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: [''],
        data() {
            return {
                multipleSelection: [],
                carList:this.$store.state.shopCar,
                allPrice:0
            }
        },
        methods: {
            handleSelectionChange(vals) {
                this.multipleSelection = vals;
                let allPrice=0
                this.multipleSelection.forEach((val, index)=>{
                    allPrice+=val.price
                })
                this.allPrice=allPrice
                console.log(vals)

            },
            deleteShop(index){
                this.carList.splice(index,1)
                localStorage.setItem('shopCar',JSON.stringify(this.carList))
            },
            deleteShopCar(){
                this.carList=[]
                localStorage.setItem('shopCar',JSON.stringify(this.carList))
            },
            addPay(){
                let that=this
                function pay(cnt) {
                    console.log(that.multipleSelection)
                    that.$api.addPays(cnt,res=>{
                        if(res){
                            that.$message.success('购买成功')
                            let arr3 = that.carList.filter((item) => !(that.multipleSelection.some((i) => i === item)))
                            that.carList=arr3
                            localStorage.setItem('shopCar',JSON.stringify(arr3))
                        }
                    })
                }
                if(this.multipleSelection.length<1){
                    this.$message.error('请选择商品')
                }else{
                    this.multipleSelection.forEach(val=>{
                        let cnt=val
                        cnt.payId=Date.now()
                        cnt.userId=this.$userInfo.userId
                        pay(cnt)
                    })

                }
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

    }
</style>
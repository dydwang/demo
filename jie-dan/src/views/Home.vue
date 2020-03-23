<template>
  <div id="add">
    <el-button type="primary" @click="$routerGo('/add')">添加</el-button>
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              prop="time"
              label="日期"
              width="180">
        <template slot-scope="scope">
          {{$Time(scope.row.time).getTime()}}
        </template>
      </el-table-column>
      <el-table-column
              prop="names"
              label="名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="price"
              label="价格">
      </el-table-column>
      <el-table-column
              prop="status"
              label="status">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status==='未完成'?'info':(scope.row.status==='已完成'?'':'success')">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
              prop="time"
              label="操作"
              width="180">
        <template slot-scope="scope">
          <el-button type="text" @click="$routerGo('About',scope.row)">查看</el-button>
          <el-button type="text" @click="up(scope.row,scope.$index,'已完成')">已完成</el-button>
          <el-button type="text" @click="up(scope.row,scope.$index,'已结账')">已结账</el-button>
          <el-button type="text" @click="del(scope.row,scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "add",
    props: [''],
    data() {
      return {
        tableData:[]
      }
    },
    methods: {
      up(row,index,status){
        let cnt={
          $where:{
            time:row.time
          },
          $set:{
            status:status
          }
        }
        this.$api.updatePdf(cnt,res=>{
            if(res){
              row.status=status
            }
        })
      },
      del(row,index){
        let cnt={
          time:row.time
        }
        this.$api.delPdf(cnt,res=>{
          if(res){
            this.tableData.splice(index,1)
          }
        })
      }
    },
    mounted() {
      this.$api.getPdf({$orderBY:{col:'time',method:'DESC'}},res=>{
        this.tableData=res
      })
    },
    created() {
    },
    components: {},
    watch: {},
  }
</script>

<style scoped lang='scss'>
  #add {

  }
</style>
<template>
  <div class="home">
    <el-container>
      <el-header height="60px" id="header">
        <div class="pageTitle">
          <div >
            <img class="WebIcon" src="@/assets/image/zfgz.png">
          </div>
          <div class="WebTitle">贵州中孚格致</div>
        </div>

        <el-popover
                placement="bottom-end"
                width="160"
                trigger="hover">
          <tips></tips>
          <user-image slot="reference" v-if="$userInfo!==null" width="24px" height="24px" class=" user"
                      border-radius="12px" @click="toPersonal('/information','1')">
          </user-image>
          <div v-else slot="reference"  class="el-icon-user-solid user" @click="toPersonal('/information','1')"></div>
        </el-popover>
        <!--<el-popover-->
                <!--placement="bottom"-->
                <!--title="观看历史"-->
                <!--width="240"-->
                <!--trigger="hover">-->
          <!--<history></history>-->
          <!--<div slot="reference"  class="el-icon-time titleIcon" @click="toPersonal('/history','3')"></div>-->
        <!--</el-popover>-->
        <el-tooltip class="item" effect="dark" content="上传视频" placement="bottom">
          <div class="el-icon-upload2 titleIcon" @click="toPersonal('/upload','3')"></div>
        </el-tooltip>
        <zfgzMenu ref="zfgzMenu"></zfgzMenu>
        <search></search>
        <el-divider></el-divider>
      </el-header>
      <el-main>
        <div style="width: 100%">
          <router-view />
        </div>
      </el-main>
    </el-container>

    <div class="suspension">
       <suspension />
    </div>

    <signIn ref="signIn"></signIn>
  </div>
</template>

<script>
  const suspension  = ()=>import('./suspension')
  import tips from "./sign/tips"
 // import history from "./sign/history"
  import zfgzMenu from "./zfgzMenu"
  import search from "./search"
 // import suspension from "./suspension"
export default {
    data(){
      return{

      }
    },
  methods:{
    toPersonal(path,key){
      if(this.$userInfo===null){ //如果没有登陆 那么将登陆
          this.$login()
      }else{
        let nowPath=this.$router.history.current.fullPath
        if(nowPath!==path){
          this.$router.push({path:path})//记忆跳转
          this.$resetSetItem('activeIndex', key);
          this.$resetSetItem('leftMenu', key);
          this.$refs.zfgzMenu.changeIndex('4')
          this.$router.push(path)
        }
      }


    }
  },
  components: {
    history, tips, zfgzMenu, search,suspension
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
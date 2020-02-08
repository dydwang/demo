<template>
  <div class="home">
    <headMenu :headerFont="28" menuText="托管教育平台" headerBackground="#409eff">
    </headMenu>
    <div class="suspension">
      <suspension />
    </div>
    <div style="margin: 80px 100px">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  mounted() {
    this.getUser()
  },
  methods:{
    getUser(){

    }
  },
  created() {
  }

}
</script>
<style lang="scss">
  .suspension{
    height: 80px;
    width: 40px;
    position: fixed;
    right: 20px;
    bottom: 100px;
    z-index: 100;
  }
</style>

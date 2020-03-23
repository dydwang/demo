<template>
  <div id="add" v-if="item">
    <iframe class="filename"
            :src="'http://view.xdocin.com/xdoc?_xdoc=http://39.108.162.102:3000/uploads/'+item.word"
            width='100%' style="height: 3000px" frameborder='1' ></iframe>
  </div>
</template>

<script>
  export default {
    name: "add",
    props: [''],
    data() {
      return {
        item:false
      }
    },
    methods: {},
    mounted() {
      this.item=this.$route.query
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
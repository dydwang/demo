<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html{
    padding: 0 0;
    margin: 0 0;
    width: 100%;
    height: 100%;
    font-size: 100%;
  }
  body{
    overflow-x: hidden;
    margin: 0 0;
    padding: 0 0;
    width: 100%;
    height: 100%;
  }
  #app{
    min-width: 1100px;
    height: 100%;
  }
  ::-webkit-scrollbar-track { /* 定义滚动条轨道  内阴影+圆角*/
    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255);
    background-color: #fff;
  }

  ::-webkit-scrollbar { /*滚动条整体样式*/
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 1px #e4e4e4;
    background-color: #e4e4e4;
  }
</style>

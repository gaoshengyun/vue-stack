<template>
  <div class="menu-box">
    <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-1</a-menu-item>
        <a-sub-menu>
          <div slot="title">333-2</div>
          <a-menu-item>333-2-1</a-menu-item>
          <a-menu-item>333-2-2</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '../components/menu'
const {AMenu,AMenuItem,ASubMenu} = menuComponents
export default {
  name:'menu_page',
  components:{
    ...menuComponents
  }
}
</script>
<style lang="less">
.menu-box{
  width: 300px;
  height: 400px;
}
</style>

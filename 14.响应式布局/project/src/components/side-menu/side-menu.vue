<template>
  <div>
    <slot></slot>
    <Menu>
      <template v-for="(item, index) in list">
        <Submenu v-if="item.children" :key="`menu_${item.name}`" :name="item.name"></Submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name"> {{item.title}} </menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>
<script>
export default {
  name:'SideMenu',
  props:{
    collapsed:{
      type:Boolean,
      default:false
    },
    list:{
      type:Array,
      default:() => []
    }
  }
}
</script>
<style lang="less">

</style>

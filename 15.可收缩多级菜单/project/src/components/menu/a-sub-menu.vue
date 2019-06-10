<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform:`rotateZ(${showChild ? 0 : 180}deg)`}">^</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name:'ASubMenu',
  data() {
    return {
      showChild:false
    }
  },
  methods: {
    handleClick(){
      this.showChild = !this.showChild
    }
  },
}
</script>
<style lang="less">
.a-submenu{
  &-title{
    background-color: green;
    color: #fff;
    position: relative;
    .shrink-icon{
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
  &-child-box{
    overflow: hidden;
    padding-left: 20px;
  }

}
</style>

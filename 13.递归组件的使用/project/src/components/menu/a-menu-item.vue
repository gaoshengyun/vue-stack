<template>
  <li class="a-menu-item"><slot></slot></li>
</template>
<script>
export default {
  name:'AMenuItem'
}
</script>
<style lang="less">
.a-menu-item{
  background-color: #f00;
  color: #fff;
}
</style>

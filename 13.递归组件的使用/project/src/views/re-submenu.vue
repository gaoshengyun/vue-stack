<template>
  <a-sub-menu>
    <div slot="title"> {{parent.title}} </div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`"> {{item.title}} </a-menu-item>
      <re-sub-menu v-else :key="`menu_item_${index}_${i}`" :parent="item"> {{parent.title}} </re-sub-menu>
    </template>
  </a-sub-menu>
</template>
<script>
import menuComponents from '../components/menu'
const {AMenuItem,ASubMenu} = menuComponents
export default {
  name:'ReSubMenu',
  components:{
    AMenuItem,
    ASubMenu
  },
  props:{
    parent:{
      type:Object,
      default:() => ({})
    },
    index:Number
  }
}
</script>
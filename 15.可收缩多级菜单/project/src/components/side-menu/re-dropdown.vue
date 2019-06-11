<template>
  <Dropdown placement="right-start">
    <span class="drop-menu-span" :style="">
      <Icon :type="parent.icon" :color="iconColor" :size="20" />
      <span v-if="showTitle"> {{parent.title}} </span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name"> 
          <Icon :type="item.icon" color="#515a6e" :size="20" />
          {{item.title}} 
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name:'ReDropdown',
  props:{
    parent:{
      type:Object,
      default: ()=>({})
    },
    iconColor:{
      type:String,
      default:'#515a6e'
    },
    showTitle:{
      type:Boolean,
      default:true
    }
  },
  computed: {
    titleStyle(){
      return {
        textAlign:this.showTitle?'left':'center',
        paddingLeft:this.showTitle?'1px':''
      }
    }
  },
}
</script>
<style lang="less">

</style>

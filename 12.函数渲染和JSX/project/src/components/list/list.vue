<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
      <span v-if="!render"> {{item.name}} </span>
      <rendom-dom v-else :render-func="render" :name="item.name"></rendom-dom>
    </li>
  </ul>
</template>
<script>
import RendomDom from '../render-dom'
export default {
  name:'List',
  props:{
    list:{
      type:Array,
      default:() => []
    },
    render:{
      type:Function,
      default:() => {}
    }
  },
  components:{
    RendomDom
  }
}
</script>
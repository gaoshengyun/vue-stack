<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
       <!-- {{item.number}} -->
      <span v-if="!render"> {{item.number}} </span>
      <rendom-dom v-else :render-func="render" :number="item.number"></rendom-dom>
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
  },
  mounted() {
    console.log(this.list[0].number)
  },
}
</script>
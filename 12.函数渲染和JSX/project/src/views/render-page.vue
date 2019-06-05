<template>
  <div>
    <!-- <list :list="list" :style="{color:'red'}" :render="renderFunc"></list> -->
    <count-to slot-scope="count" :end-val="count.number"></count-to>
  </div>
</template>
<script>
import List from '../components/list'
import CountTo from '../components/count-to'
export default {
  data() {
    return {
      list:[
        {number:100},
        {number:45}
      ]
    }
  },
  components:{
    List,
    CountTo
  },
  methods: {
    renderFunc(h,number){
      // return h('i',{
      //   style:{
      //     color:'pink'
      //   }
      // },name)
      
      return  (
        // <i on-click={this.handleClick} style={{color:'pink'}}>{name}</i>
        <CountTo endValue={number} style={{color:'pink'}}></CountTo>
      )
    },
    handleClick(event){
      console.log(event)
    }
  },
}
</script>
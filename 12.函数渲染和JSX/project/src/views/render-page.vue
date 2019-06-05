<template>
  <div>
    <list :list="list" :style="{color:'red'}" :render="renderFunc"></list>
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
    List
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
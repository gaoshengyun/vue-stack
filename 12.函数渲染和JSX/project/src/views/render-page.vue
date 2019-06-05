<template>
  <div>
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>
<script>
import List from '../components/list'
export default {
  data() {
    return {
      list:[
        {name:'gsy'},
        {name:'gaius'}
      ]
    }
  },
  components:{
    List
  },
  methods: {
    renderFunc(h,name){
      return h('i',{
        style:{
          color:'pink'
        }
      },name)
    }
  },
}
</script>
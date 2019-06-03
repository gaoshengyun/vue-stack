<template>
  <div>
    <count-to :end-val="4564321">
      <span slot="left">总金额:</span>
      <span slot="right">元</span>
    </count-to>
  </div>
</template>
<script>
import CountTo from '../components/count-to/index.js'
export default {
  name:'count_to',
  components:{
    CountTo
  }
}
</script>
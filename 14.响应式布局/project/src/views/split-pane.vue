<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '../components/split-pane'
export default {
  data() {
    return {
      offset:0.8
    }
  },
  components:{
    SplitPane
  },methods: {
    // handleInput(value){
    //   this.offset = value
    // }
  },
}
</script>
<style lang="less" scoped>
.split-pane-con{
  width: 400px;
  height: 200px;
  background-color: papayawhip
}
</style>

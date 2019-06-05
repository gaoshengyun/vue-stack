<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffsetPercent}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMouseDown" :style="{left:triggerLeft,width:`${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent}">
      <slot name="right"></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'SplitPane',
  props:{
    value:{
      type:Number,
      default:0.5
    },
    triggerWidth:{
      type:Number,
      default:8
    },
    min:{
      type:Number,
      default:0.1
    },
    mxa:{
      type:Number,
      default:0.9
    }
  },
  data() {
    return {
      // leftOffset:0.3,
      canMove:false,
      intoOffset:0
    }
  },
  computed: {
    leftOffsetPercent(){
      return `${this.value * 100}%`
    },
    triggerLeft(){
      return `calc(${this.value * 100}% - ${this.triggerWidth/2}px)`
    }
  },
  methods: {
    handleClick(){
      this.value -= 0.02
    },
    handleMouseDown(event){
      document.addEventListener('mousemove',this.handleMouseMove)
      document.addEventListener('mouseup',this.handleMouseup)
      this.intoOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove(event){
      if(!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX-this.intoOffset+this.triggerWidth/2-outerRect.left)/outerRect.width
      if(offsetPercent < this.min){
        offsetPercent = this.min
      }
      if(offsetPercent > this.mxa){
        offsetPercent = this.mxa
      }
      // this.$emit(`input`,offsetPercent)
      this.$emit(`update:value`,offsetPercent)
    },
    handleMouseup(){
      this.canMove =  false
    }
  },
}
</script>
<style lang="less" scoped>
.split-pane-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
  .pane{
    height: 100%;
    top: 0;
    position: absolute;
    &-left{
      // width: 30%;
      background-color:palevioletred;
    }
    &-right{
      right: 0;
      bottom: 0;
      // left: 30%;
      background-color: paleturquoise;
    }
    &-trigger-con{
      height: 100%;
      background-color: #f00;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>

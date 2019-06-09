<template>
  <div class="home">
    
    <!-- <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
    <p>{{food}}</p> -->

    <Row>
      <Col></Col>
    </Row>
    <Row :gutter="10">
      <Col span="12"></Col>
      <Col span="12"></Col>
    </Row>
    <Row :gutter="10">
      <Col span="8"></Col>
      <Col span="8"></Col>
      <Col span="8"></Col>
    </Row>
    <Row :gutter="10" class="blue">
      <Col :md="6" :sm="12" :xs="24"></Col>
      <Col :md="6" :sm="12" :xs="24"></Col>
      <Col :md="6" :sm="12" :xs="24"></Col>
      <Col :md="6" :sm="12" :xs="24"></Col>
    </Row>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import {getUserInfo} from '../api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props:{
    food:{
      type:String,
      default:'apple'
    }
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('是否确定要离开')
    if(leave) next()
    else next(false)
  },
  methods: {
    handleClick(type){
      if(type === 'back'){
        this.$router.back()
      }else if(type === 'push'){
        this.$router.push({
          name:'argu',
          params:{
            name:'gsy'
          }
          // query:{
          //   name:'gsy'
          // }
        }) 
      }else if(type === 'replace'){
        this.$router.replace({
          name:'parent'
        })
      }
      
    },
    getInfo(){
      // axios.get('/plist/index?json=true').then(res => {
      //   console.log(res)
      // })
      getUserInfo().then(res => {
        console.log('res:  ',res)
      })
    }
  },
}
</script>
<style lang="less">
.home{
  .ivu-col{
    height: 50px;
    background-color: pink;
    margin-top: 10px;
    background-clip: content-box;
  }
  .blue{
    .ivu-col{
      background:blue;
      background-clip: content-box;
    }
  }
}
</style>


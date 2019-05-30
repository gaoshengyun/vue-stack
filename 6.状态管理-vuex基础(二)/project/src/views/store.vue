<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}} -> last letter is {{inputValueLastLetter}}</p>
    <!-- <a-show
      :content='inputValue'
    /> -->

    <p>appName:{{appName}},appNameWithVersion:{{appNameWithVersion}},mapgetters:{{appWithVersion}}</p>
    <p>userName:{{userName}},firstLetter:{{firstLetter}}</p>
    <button @click="handlechangeAppname">修改appName</button>
    <p>{{appVersion}}</p>
    <button @click="changeUserName">修改username</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(item, index) in todoList" :key="index">{{item}}</p>
  </div>
</template>
<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name:'store',
  data() {
    return {
      inputValue:''
    }
  },
  components:{
    AInput,
    AShow
  },
  computed: {
   
    ...mapState({
      appName:state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),

    ...mapGetters([
      'appWithVersion',
      'firstLetter'
    ]),

    appNameWithVersion(){
      return this.$store.getters.appWithVersion
    },
    // ...mapState([
    //   `appName`
    // ])
    // appName(){
    //   return this.$store.state.appName
    // },
    // userName(){
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter(){
      return this.inputValue.substr(-1,1)
    }
  }, 
  methods: {
    handleInput(val){
      this.inputValue = val
    },
    ...mapActions([
      'updateAppName'
    ]),
    handlechangeAppname(){
      // this.$store.commit('SET_APP_NAME','newAppName')
      // this.$store.commit({
      //   type:'SET_APP_NAME',
      //   appName:'ne11wAppName'
      // }),
      // this.$store.commit('SET_APP_VERSION')
      this.updateAppName()
    },
    changeUserName(){
      this.$store.commit('SET_USER_NAME','vue-stack')
    },
    registerModule(){
      this.$store.registerModule(['user','todo'],{
        state:{
          todoList:[
            '学习mutations',
            '学习actions'
          ]
        }
      })
    }
  },
}
</script>
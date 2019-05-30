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
  </div>
</template>
<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'
import {mapState,mapGetters} from 'vuex'
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
      appVersion: state => state.appVersion
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
    handlechangeAppname(){
      // this.$store.commit('SET_APP_NAME','newAppName')
      this.$store.commit({
        type:'SET_APP_NAME',
        appName:'ne11wAppName'
      }),
      this.$store.commit('SET_APP_VERSION')
    },
    changeUserName(){
      this.$store.commit('SET_USER_NAME','vue-stack')
    }
  },
}
</script>
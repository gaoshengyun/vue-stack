<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}} -> last letter is {{inputValueLastLetter}}</p>
    <!-- <a-show
      :content='inputValue'
    /> -->

    <p>appName:{{appName}},appNameWithVersion:{{appNameWithVersion}},mapgetters:{{appWithVersion}}</p>
    <p>userName:{{userName}},firstLetter:{{firstLetter}}</p>
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
      userName: state => state.user.userName
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
    }
  },
}
</script>
<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}}</p>
    <a-show
      :content='inputValue'
    />
  </div>
</template>
<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'
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
  methods: {
    handleInput(val){
      this.inputValue = val
    }
  },
}
</script>
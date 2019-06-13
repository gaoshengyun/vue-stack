<template>
  <Table :columns="insidecolumns" :data="data"></Table>
</template>
<script>
export default {
  name:'EditTable',
  data() {
    return {
      insidecolumns:[],
      edittingId:''
    }
  },
  props:{
    columns:{
      type:Array,
      default: () => []
    },
    data:{
      type:Array,
      default:() => []
    }
  },
  methods: {
    handleClick(row,index,column){
      console.log(row)
      // this.edittingId = `${column.key}_${index}`
    }
  },
  mounted() {
    const insidecolumns = this.columns.map(item => {
      if(!item.render && item.editable){
        item.render = (h,{row,index,column}) => {
          // console.log(row,index,column)
          return (
            <div>
            
              {row[column.key]}
              <i-input value={row[column.key]} style="width:50px;"></i-input>
              <i-button on-click={this.handleClick.bind(this,{row,index,column})}>编辑</i-button>
            </div>
          )
        }
        return item
      }else{
        return item
      }
    })
    this.insidecolumns = insidecolumns
  },
}
</script>
<style lang="less">

</style>

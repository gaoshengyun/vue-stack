<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-1</a-menu-item>
        <a-sub-menu>
          <div slot="title">333-2</div>
          <a-menu-item>333-2-1</a-menu-item>
          <a-menu-item>333-2-2</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_utem_${index}`">{{item.title}}</a-menu-item>
        <re-sub-menu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '../components/menu'
import ReSubMenu from '../views/re-submenu.vue'
const {AMenu,AMenuItem,ASubMenu} = menuComponents
export default {
  name:'menu_page',
  components:{
    ...menuComponents,
    ReSubMenu
  },
  data() {
    return {
      list:[
        {
          title:'1111'
        },
        {
          title:'2222'
        },
        {
          title:'3333',
          children:[
            {title:'3333-1'},
            {
              title:'3333-2',
              children:[
                {
                  title:'3333-2-1'
                },
                {
                  title:'3333-2-2'
                },
                {
                  title:'3333-2-3',
                  children:[
                    {title:'3333-2-3-1'},
                    {title:'3333-2-3-2'},
                  ]
                },
              ]
            }
          ]
        }
      ]
    }
  },
}
</script>
<style lang="less">
.menu-box{
  width: 300px;
  height: 400px;
}
</style>

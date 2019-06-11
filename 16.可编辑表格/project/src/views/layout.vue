<template>
  <div class="layou-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed">
          <side-menu :list="menuList" :collapsed="collapsed"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"></Icon>
        </Header>
        <Content class="content-card">
          <Card shadow class="page-card">
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '../components/side-menu'
export default {
  components:{
    SideMenu
  },
  data() {
    return {
      collapsed:false,
      menuList:[
        {
          title:'1',
          name:'menu1',
          icon:'ios-alarm'
        },
        {
          title:'2',
          name:'menu2',
          icon:'ios-alarm'
        },
        {
          title:'3',
          name:'menu3',
          icon:'ios-alarm',
          children:[
            {
              title:'3-1',
              name:'menu11',
              icon:'ios-alarm'
            },
            {
              title:'3-2',
              name:'menu12',
              icon:'ios-alarm',
              children:[
                {
                  title:'3-2-1',
                  name:'menu121',
                  icon:'ios-alarm'
                },
                {
                  title:'3-2-2',
                  name:'menu122',
                  icon:'ios-alarm'
                },
              ]
            }
          ]
        },
      ]
    }
  },
  methods: {
    handleCollapsed(){
      this.collapsed = !this.collapsed
    }
  },
  computed: {
    triggerClasses(){
      return [
        'trigger-icon',
        this.collapsed?'rotate':''
      ]
    }
  },
}
</script>
<style lang="less">
.layout-outer,.layou-wrapper{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
    padding: 0 23px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .content-card{
    padding: 10px;
  }
  .page-card{
    min-height: calc(~"100vh - 84px");
  }
}

</style>

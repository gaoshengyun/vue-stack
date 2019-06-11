const path = require('path')
const resolve = dir => path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue-project' : '/'

module.exports = {
  lintOnSave: false,
  publicPath:BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set ('@' ,resolve('src'))
      .set('_c',resolve('src/components'))
  },
  //打包时不生成map文件
  productionSourceMap:false,
  devServer:{
    //开记代理
    proxy:'http://m.kugou.com'
  }
}

//服务器设置方法
/**
 * 所有request设置header
 * res.header('Access-Control-Allow-Origin','*')
 * res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type')
 * res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS')
 */
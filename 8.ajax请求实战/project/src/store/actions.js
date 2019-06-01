import {getAppName} from '../api/app'
const actions = {
  // updateAppName({commit}){
  //   // getAppName().then(res => {
  //   //   // console.log(res)
  //   //   const {code,info :{appName}} = res
  //   //   commit('SET_APP_NAME',appName)
  //   // }).catch(err => console.log(err))
    
  // }
  async updateAppName({commit}){
    try{
      const {code,info :{appName}} = await getAppName()
      commit('SET_APP_NAME',appName)
    }catch(err){
      throw err
    }
    
  }
}

export default actions
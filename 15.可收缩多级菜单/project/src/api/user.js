import axios from './index'
export const  getUserInfo = () => {
  return axios.request({
    url:'/plist/index?json=true',
    method:'GET'
  })
}
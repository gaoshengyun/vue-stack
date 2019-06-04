import Mock from 'mockjs'
import{getUserInfo} from './response/user'
console.log(getUserInfo)
Mock.mock('http://m.kugou.com/plist/index?json=true','get',getUserInfo)
export default Mock
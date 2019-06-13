import Mock from 'mockjs'
import{getUserInfo} from './response/user'
import { getTableData } from './response/data'
console.log(getUserInfo)
Mock.mock('http://m.kugou.com/plist/index?json=true','get',getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)
export default Mock
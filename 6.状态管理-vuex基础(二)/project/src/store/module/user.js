const state = {
  userName:'Gaoshengyun'
}

const getters = {
  firstLetter: state => {
    return state.userName.substr(0,1)
  }
}

const mutations = {
  SET_USER_NAME(state,params){
    state.userName = params
  }
}

const actions = {}

export default {
  namespace:true,
  state,
  mutations,
  actions,
  getters
}
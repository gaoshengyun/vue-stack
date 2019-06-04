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

const actions = {
  updateUserName({commit,state,rootState,dispatch}){

  }
}

export default {
  namespace:true,
  state,
  mutations,
  actions,
  getters,
  modules:{

  }
}
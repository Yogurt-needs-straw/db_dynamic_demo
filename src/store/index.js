import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    routers: localStorage.getItem("routers") || "",
    menus: localStorage.getItem("menus") || "",
    permissions: localStorage.getItem("permissions") || "",
  },
  getters: {
    routers(state){
      if(state.routers){
        return JSON.parse(state.routers);
      }
    },
    menus(state){
      if(state.menus){
        return JSON.parse(state.menus);
      }
    },
    permissions(state){
      if(state.permissions){
        return JSON.parse(state.permissions);
      }
    }
  },
  mutations: {
    login(state,{routers, menus, permissions, token}){
      state.token = token;
      localStorage.setItem('token', token);

      state.routers = JSON.stringify(routers);
      localStorage.setItem('routers', routers);

      state.menus = JSON.stringify(menus);
      localStorage.setItem('menus', menus);

      state.permissions = JSON.stringify(permissions);
      localStorage.setItem('permissions', permissions);
    }
  },
  actions: {
  },
  modules: {
  }
})

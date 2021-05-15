export const state = () => ({
    list: []
  });
  
  export const mutations = {
    SET_LIST(state, usuarios) {
      state.list = usuarios;
    },
    ADD(state, usuario){
      state.list.push(usuario);
    }
  };
  
  export const actions = {
    async list({ commit }, id) {
      try {
        const { data } = await this.$axios.get(`usuario/${id}`);
  
        commit("SET_LIST", data);
  
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async add({commit},usuario){
      
      const {data} = await this.$axios.post(`usuario`, usuario);
      
      commit("ADD", usuario);
  
      return data;
    }
  };
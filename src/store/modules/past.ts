import Util from '@/lib/util';

const past = {
  namespaced: true,
  state: {
    past: [],
  },
  mutations: {
    setPast(state, value) {
      state.past = value;
    },
  },
  actions: {
    async getPast({commit, state}) {
      Util.get('/api/vuepro/past', {}).then((res:any): any => {
        commit('setPast', res.data.data);
      }, (err: object): any => {
        window.alert('接口出错了。。');
      });
    },
  }
};



export default past;
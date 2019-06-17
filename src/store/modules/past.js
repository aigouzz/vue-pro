import Util from '@/lib/util';
const past = {
    namespaced: true,
    state: {
        name: '',
        app: 'v1.1',
        past: [],
    },
    mutations: {
        setName(state, value) {
            state.name = value;
        },
        setApp(state, value) {
            state.app = value;
        },
    },
    actions: {
        async setName({ dispatch, commit, state }) {
            return new Promise(async (resolve, reject) => {
                let val = await dispatch('setApp');
                commit('setName', val);
                resolve();
                if (!state.name) {
                    reject();
                }
            });
        },
        setApp({ commit }) {
            commit('setApp', 'v2.0');
        },
        async getPast({ commit, state }) {
            Util.get('/api/vuepro/past', {}).then((res) => {
                state.past = res.data.data;
                window.console.log(state.past);
            }, (err) => {
                window.alert('接口出错了。。');
            });
        },
    }
};
export default past;
//# sourceMappingURL=past.js.map
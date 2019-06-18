import Util from '@/lib/util';
const index = {
    namespaced: true,
    state: {
        app: '',
    },
    mutations: {
        setAPP(state, value) {
            state.app = value;
        },
    },
    actions: {
        async getAPP({ commit, state }) {
            return new Promise((resolve, reject) => {
                Util.get('/api/vuepro/index', {}).then((res) => {
                    commit('setAPP', res.data.data);
                    resolve();
                }, (err) => {
                    reject(err);
                });
            });
        },
    }
};
export default index;
//# sourceMappingURL=index.js.map
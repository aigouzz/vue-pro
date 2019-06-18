import Util from '@/lib/util';
const next = {
    namespaced: true,
    state: {
        next: [],
    },
    mutations: {
        setNext(state, value) {
            state.next = value;
        }
    },
    actions: {
        async getNext({ commit, state }) {
            return new Promise((resolve, reject) => {
                Util.get('/api/vuepro/tag', {}).then((res) => {
                    commit('setNext', res.data.data);
                    resolve();
                }, (err) => {
                    reject(err);
                });
            });
        },
    },
};
export default next;
//# sourceMappingURL=next.js.map
const index = {
    state: {
        app: '',
    },
    mutations: {
        setAPP(state, value) {
            state.app = value;
        },
    },
    actions: {
        setAPP({ commit, state }) {
            return new Promise((resolve, reject) => {
                commit('setAPP');
                resolve();
                if (!state.app) {
                    reject();
                }
            });
        },
    }
};
export default index;
//# sourceMappingURL=index.js.map
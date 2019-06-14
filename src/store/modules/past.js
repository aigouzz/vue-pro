const past = {
    state: {
        name: '',
        app: 'v1.1',
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
    }
};
export default past;
//# sourceMappingURL=past.js.map
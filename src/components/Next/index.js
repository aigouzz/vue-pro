import { mapState } from "vuex";
export default {
    data() {
        return {
            name: 'guoxc',
        };
    },
    getData({ store, route, router }) {
        return store.dispatch('next/getNext');
    },
    computed: {
        ...mapState('next', [
            'next',
        ]),
    },
};
//# sourceMappingURL=index.js.map
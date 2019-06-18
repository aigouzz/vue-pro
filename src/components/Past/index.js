import { mapState } from "vuex";
export default {
    data() {
        return {
            name: 'this is test past',
        };
    },
    getData({ store, route }) {
        const self = this;
        return store.dispatch('past/getPast');
    },
    computed: {
        ...mapState('past', [
            'past'
        ]),
    },
    watch: {
        past() {
            window.console.log(this.past);
        }
    },
};
//# sourceMappingURL=index.js.map
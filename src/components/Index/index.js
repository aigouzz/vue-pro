import { mapState } from "vuex";
export default {
    data() {
        return {
            page: 0,
        };
    },
    mounted() {
        const self = this;
        self.$toast.show({
            text: 'haha'
        });
        setTimeout(() => {
            self.$toast.hide();
        }, 3000);
        setTimeout(() => {
            self.$toast.show();
        }, 6000);
    },
    getData({ store, route }) {
        return store.dispatch('index/getAPP');
    },
    computed: {
        ...mapState('index', [
            'app'
        ]),
    },
};
//# sourceMappingURL=index.js.map
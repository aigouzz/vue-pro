import Vue from 'vue';
import { mapState } from "vuex";
export default {
    data() {
        return {
            page: 0,
        };
    },
    created() {
        window.console.log(Vue.prototype);
    },
    mounted() {
        const self = this;
        self.$toast.show({
            text: '出错了，请重试',
            type: 'error'
        });
        setTimeout(() => {
            self.$toast.hide();
        }, 2000);
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
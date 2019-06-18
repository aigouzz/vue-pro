import Toast from './Toast/index.vue';
const plugin = {
    install: null,
};
plugin.install = (Vue, options = {}) => {
    const toast = new Vue(Toast).$mount();
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = {
        show(options = {}) {
            toast.show(options.text);
        },
        hide(options = {}) {
            toast.hide();
        },
    };
};
export default {
    install: plugin.install,
};
//# sourceMappingURL=index.js.map
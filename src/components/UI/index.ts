import Toast from './Toast/index.vue';

const plugin = {
    install: null,
};
plugin.install = (Vue, options = {}) => {
    const toast = new Vue(Toast).$mount();
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = {
        show(options={}) {
            toast.show(options.text, options.type);
        },
        hide(options={}) {
            toast.hide();
        },
    };
};

export default {
    install: plugin.install,
};

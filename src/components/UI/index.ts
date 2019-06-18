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
            return this;
        },
        hide(options={}) {
            toast.hide();
            return this;
        },
    };
};

export default {
    install: plugin.install,
};

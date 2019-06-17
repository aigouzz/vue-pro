import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vueResource from 'vue-resource';
import routes from './router/index.js';
import Store from './store/index.js';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.config.productionTip = false;
const router = new VueRouter({
    mode: 'history',
    routes,
});
// console.log(routes);
const store = new Vuex.Store(Store);
Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        window.console.log('===========');
        window.console.log(to);
        window.console.log('===========');
        const getData = this.$options.getData;
        if (getData) {
            getData.call(this, {
                store: this.$store,
                route: to
            }).then(() => next, () => next);
        }
        else {
            next();
        }
    },
});
router.beforeEach((to, from, next) => {
    window.console.log(to);
    window.console.log(from);
    window.console.log(next);
    window.console.log(this);
    next();
});
/* eslint-disable no-new */
new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount('#app');
//# sourceMappingURL=main.js.map
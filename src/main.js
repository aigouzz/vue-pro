import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './router/index.js';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

// console.log(routes);

const store = new Vuex.Store({
  mutations : {},
  state: {},
  actions: {},
});

/* eslint-disable no-new */
new Vue({
  render: (h)=>h(App),
  router,
  store,
}).$mount('#app');


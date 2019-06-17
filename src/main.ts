import Vue from 'vue'
import App from './App.vue'
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
    const getData = this.$options.getData;
    if (getData) {
      self.data = getData.call(this, {
        store: this.$store,
        route: to
      }).then(() => next, () => next);
    } else {
      next();
    }
  },
});

router.beforeResolve((to, from, next) => {
  window.console.log(to);
  const matched = router.getMatchedComponents(to);
  const prevMatched = router.getMatchedComponents(from);

  let diffed  = false;
  const activated = matched.filter((c, i) => {
    return diffed || (diffed = (prevMatched[i] != c));
  });
  if (!activated.length) {
    return next();
  }

  Promise.all(activated.map(c => {
    if (c.getData || (!c.asyncDataFetched && !to.meta.notKeepAlive)) {
      return c.getData({ store, route: to });
    }
  })).then(() => {
    next();
  }).catch(next);
});

/* eslint-disable no-new */
new Vue({
  render: (h)=>h(App),
  router,
  store,
}).$mount('#app');
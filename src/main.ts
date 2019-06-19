import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vueResource from 'vue-resource';
import Util from '@/lib/util';
import routes from './router/index.js';
import Store from './store/index.js';
import Install from '@/components/UI/index';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.config.productionTip = false;
Vue.use(Install.install);

const router = new VueRouter({
  mode: 'history',
  routes,
});


const store = new Vuex.Store(Store);

Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const getData = this.$options.getData;
    if (getData) {
      getData.call(this, {
        store,
        route: to,
        router,
      }).then(() => next, () => next);
    } else {
      next();
    }
  },
});

router.beforeResolve((to, from, next) => {
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
    if (c.getData && (!c.asyncDataFetched || to.meta.notKeepAlive)) {
      return c.getData({ store, route: to, router}).then(() => {
        c.asyncDataFetched = true;
      });
    }
  })).then(() => {
    next();
  }).catch(next);
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!Util.isLogin()) {
      next(false);
      router.push({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  render: (h)=>h(App),
  router,
  store,
}).$mount('#app');
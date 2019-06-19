import Vue from 'vue';
import {mapState} from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },
  created() {
    // window.console.log(Vue.prototype);
  },
  mounted() {
    const self = this;
    setTimeout(() =>{
      self.$toast.hide();
    }, 2000);
  },
  getData({store, route}) {
    const self = this;
    return store.dispatch('index/getAPP').catch((err) => {
      self.$toast.show({
        text: '请求首页数据出错，请重试~',
        type: 'error',
      });
    });
  },
  computed: {
    ...mapState('index', [
        'app'
    ]),
  },
};

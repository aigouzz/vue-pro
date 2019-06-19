import Util from '@/lib/util';
import {mapState} from "vuex";

export default {
  data() {
    return {
      name: 'this is test past',
    };
  },
  mounted() {
    setTimeout(() => {
      window.console.log(this.past);
      const past = [
        {
          name: 'first',
          title: 'this is 1',
        },
        {
          name: 'second',
          title: 'this is 2',
        },
      ];
      this.$store.commit('past/setPast', past);
    }, 2000);
  },
  getData({store, route}) {
    const self = this;
    return store.dispatch('past/getPast');
  },
  computed: {
    ...mapState('past', [
        'past'
    ]),
  },
};



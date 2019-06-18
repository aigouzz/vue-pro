import Util from '@/lib/util';
import {mapState} from "vuex";


export default {
  data() {
    return {
      name: '',
    };
  },
  getData({store, route, router}) {
    const  self = this;
    return store.dispatch('index/getAPP');
  },
  computed: {
    ...mapState('index', [
        'app',
    ]),
  },
}
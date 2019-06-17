import Util from '@/lib/util';

export default {
  data() {
    return {
      page: 0,
      list: [],
    };
  },
  created() {
    const self = this;
    window.console.log('index');
  },
  methods: {

  },
  getData({store, route}) {
    const self = this;
    const data = {
      type: 'movie',
      tag: '热门',
      page_limit: 50,
      page_start: self.page,
    };
    return Util.get('/api/vuepro/index', {}).then((res:any): any => {
      self.data.list = res.data.data;
      window.console.log(self);
    }, (err: object): any => {
      window.alert('接口出错了。。');
    });
  },
};


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
    self.getData();
  },
  methods: {
    getData() {
      const self = this;
      const data = {
        type: 'movie',
        tag: '热门',
        page_limit: 50,
        page_start: self.page,
      };
      Util.get('/api/vuepro/index', {}).then((res:any): any => {
        window.console.log(res.data.data); // ok
        self.list = res.data.data;
      }, (err: object): any => {
        window.alert('接口出错了。。')
      });
    },
  },
};


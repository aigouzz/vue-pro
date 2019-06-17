import Util from '@/lib/util';
export default {
  data() {
    return {
      name: '',
      tags: [],
    };
  },
  created() {
    const self = this;
    window.console.log('loader');
  },
  getData() {
    const  self = this;
    Util.get('/api/vuepro/tag', {}).then((res:any): any => {
      window.console.log(res.data.data); // ok
      self.tags = res.data.data;
    }, (err: object): any => {
      window.alert('接口出错了。。')
    });
  },
}
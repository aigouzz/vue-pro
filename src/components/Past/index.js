import Util from '@/lib/util';
export default {
    data() {
        return {
            name: 'this is test past',
            past: [],
        };
    },
    created() {
        const self = this;
        // window.console.log(self.name);
        window.console.log('past');
    },
    getData() {
        const self = this;
        Util.get('/api/vuepro/past', {}).then((res) => {
            window.console.log('past data'); // ok
            window.console.log(res.data.data); // ok
            self.past = res.data.data;
        }, (err) => {
            window.alert('接口出错了。。');
        });
    },
};
//# sourceMappingURL=index.js.map
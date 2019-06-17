import Util from '@/lib/util';
export default {
    data() {
        return {
            name: 'guoxc',
            tags: [],
        };
    },
    created() {
        // this.name = 'guoxunchao';
        const self = this;
        window.console.log('next');
        Util.get('/api/vuepro/tag', {}).then((res) => {
            window.console.log(res.data.data); // ok
            self.tags = res.data.data;
        }, (err) => {
            window.alert('接口出错了。。');
        });
    },
};
//# sourceMappingURL=index.js.map
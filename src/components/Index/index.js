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
            Util.get('//movie.douban.com/j/search_subjects', data).then((res) => {
                window.console.log(res); // ok
                // self.list = res.subjects;
            }, (err) => {
                window.alert('接口出错了。。');
            });
        },
    },
};
//# sourceMappingURL=index.js.map
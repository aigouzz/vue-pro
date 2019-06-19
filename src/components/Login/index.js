import Util from '@/lib/util';
export default {
    data() {
        return {
            name: '',
            password: '',
        };
    },
    methods: {
        login() {
            const self = this;
            if (!self.name || !self.password) {
                self.$toast.show({
                    text: '请输入用户名或密码',
                    type: 'error'
                });
                return false;
            }
            return Util.doLogin(self.name, self.password).then(() => {
                self.$toast.show({
                    text: '登录成功',
                    type: 'success'
                });
            }, (err) => {
                self.$toast.show({
                    text: '登录失败，请重试',
                    type: 'error'
                });
            });
        },
    },
};
//# sourceMappingURL=index.js.map
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
            else if (sessionStorage.getItem('token')) {
                self.$toast.show({
                    text: '您已经登陆过，不用重复登录',
                    type: 'error'
                });
                return false;
            }
            return Util.doLogin(self.name, self.password).then((res) => {
                if (res.data.code == 0) {
                    self.$toast.show({
                        text: '登录成功',
                        type: 'success'
                    });
                    sessionStorage.setItem('token', res.data.token);
                }
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
import Vue from 'vue';
const Vue1 = Vue;
const get = (url, data) => {
    return Vue1.http.get(url, data);
};
const post = (url, data) => {
    return Vue1.http.post(url, data);
};
const jsonp = (url, data) => {
    return Vue1.http.jsonp(url, data);
};
const isLogin = () => {
    return sessionStorage.getItem('token');
};
const doLogin = (name, password) => {
    return new Promise((resolve, reject) => {
        post('/api/vuepro/login', {
            name: '',
            password: '',
        }).then((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    });
};
export default {
    get,
    post,
    jsonp,
    isLogin,
    doLogin,
};
//# sourceMappingURL=util.js.map
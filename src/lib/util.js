import Vue from 'vue';
const get = (url, data) => {
    return Vue.http.get(url, data);
};
const post = (url, data) => {
    return Vue.http.post(url, data);
};
const jsonp = (url, data) => {
    return Vue.http.jsonp(url, data);
};
export default {
    get,
    post,
    jsonp
};
//# sourceMappingURL=util.js.map
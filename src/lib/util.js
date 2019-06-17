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
export default {
    get,
    post,
    jsonp
};
//# sourceMappingURL=util.js.map
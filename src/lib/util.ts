import Vue from 'vue';

const get = (url: string, data: object) => {
  return Vue.http.get(url, data);
};

const post = (url: string, data: object) => {
  return Vue.http.post(url, data);
};

const jsonp = (url: string, data: object) => {
  return Vue.http.jsonp(url, data);
};


export default {
  get,
  post,
  jsonp
}
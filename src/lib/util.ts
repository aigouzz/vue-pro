import Vue from 'vue';

const Vue1:any = Vue;
const get = (url: string, data: object) => {
  return Vue1.http.get(url, data);
};

const post = (url: string, data: object) => {
  return Vue1.http.post(url, data);
};

const jsonp = (url: string, data: object) => {
  return Vue1.http.jsonp(url, data);
};


export default {
  get,
  post,
  jsonp
}
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

const isLogin = () => {
  return sessionStorage.getItem('token');
};

const login = () => {
  window.console.log(Vue.prototype.$router);
  Vue1.prototype.$router.push({
    name: 'login',
  });
};

const doLogin = (name:string, password: string) => {
  return new Promise((resolve, reject) => {
    post('/api/vuepro/login',{
      name: '',
      password: '',
    }).then((res)=>{
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
  login,
  doLogin,
}
import Axios from 'axios';

const get = (url: string, data: object) => {
  return Axios.get(url, data);
};

const post = (url: string, data: object) => {
  return Axios.post(url, data);
};




export default {
  get,
  post,
}
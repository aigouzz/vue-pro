import Axios from 'axios';
const get = (url, data) => {
    return Axios.get(url, data);
};
const post = (url, data) => {
    return Axios.post(url, data);
};
export default {
    get,
    post,
};
//# sourceMappingURL=util.js.map
import a from './a';
import b from './b';

const get = (type) => {
  return type == 'name' ? a.name : b.age;
}



export default {
  get,
}
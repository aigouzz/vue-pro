import Past from '../components/Past/index.vue';
import Load from '../components/Loader/index.vue';
import Next from '../components/Next/index.vue';

export  default [
  {
    path: '/past',
    name: 'past',
    component: Past,
  },
  {
    path: '/load',
    name: 'load',
    component: Load,
  },
  {
    path: '/next',
    name: 'next',
    component: Next,
  },
  {
    path: '*',
    name: 'all',
    component: Past,
  },
]
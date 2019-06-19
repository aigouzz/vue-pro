import Past from '../components/Past/index.vue';
import Load from '../components/Loader/index.vue';
import Next from '../components/Next/index.vue';
import Index from '../components/Index/index.vue';
import Login from '../components/Login/index.vue';
export default [
    {
        path: '/past',
        name: 'past',
        component: Past,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/load',
        name: 'load',
        component: Load,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/next',
        name: 'next',
        component: Next,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '*',
        name: 'all',
        component: Index,
        meta: {
            requireAuth: true
        }
    },
];
//# sourceMappingURL=index.js.map
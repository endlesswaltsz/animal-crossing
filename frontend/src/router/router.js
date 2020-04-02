// import App from '../App'
import ex from '@/components/ex'
import index from '@/components/index'

export default [
    {
        path: '/login',
        name: "login",
        component: () => import('@/components/login.vue'),
        meta: {
            title: "登录",
        }
    },
    {
        path: '/',
        component: index,
        children: [
            {
                path: '/user',
                component: ex
            },
        ]
    }]
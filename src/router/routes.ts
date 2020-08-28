import {createRouter} from "@/utils/core.tsx";
import {BasicLayout, UserLayout} from '@/layout'
import {Dashboard, Login} from "@/views";

/**
 * 这里就是路由表 就不说了 这不过这里是函数return的没太大意义最关键的是下面的createRouter
 */
const asyncRoute = (): Array<RouteConfig> => [
    {
        path: '/user',
        component:UserLayout,
        meta: {
          title: '登陆'
        },
        redirect: '/user/login',
        children: [
            {
                meta: {
                    title: '登陆'
                },
                path: '/user/login',
                component: Login
            }
        ]
    },
    {
        path: '/',
        component: BasicLayout,
        meta: {
            title: '首页'
        },
        redirect: '/dashboard',
        children: [
            {
                meta: {
                  title: '默认页'
                },
                path: '/dashboard',
                component: Dashboard,
            }
        ]
    }
]

export default () => createRouter(asyncRoute)


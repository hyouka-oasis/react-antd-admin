import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import _ from 'lodash'

window.hyoukaRouterPath = {}

function setDocumentTitle(title: string) {
    document.title = `Hyouka-${title}`
}

/**
 * 创建路由组件
 * @param routeConfig
 */
const createRoute = (routeConfig: Function) => {
    const {path, component: Com, redirect, meta, icon, ...arg} = routeConfig()
    if (path && path !== '/') {
        window.hyoukaRouterPath[path] = {path, meta, ...arg}
    }

    if (redirect && _.isArray(arg.children)) {
        arg.children = arg.children.map((route: RouteConfig) => {
            return createRoute(() => route)
        })
        arg.children.unshift(
            <Redirect to={redirect} from={path} key={`${path}_redirect`} exact/>
        )
    }
    const route = {
        key: path || _.random(),
        render: ({...prop}) => {
            setDocumentTitle(meta.title)
            return (<Com renderChildren={arg} {...prop}/>)
        }
    }
    return <Route path={path} {...route}/>
}

/**
 * 逐个创建路由组件
 * @param routerConfig
 */
export const createRouter = (routerConfig: Function) => {
    const routes = routerConfig().map((routesItem: RouteConfig) => {
        return createRoute(() => routesItem)
    }).reduce((p: any, n: any) => {
        if (n.length) {
            return [...p, ...n];
        } else {
            return p.concat(n);
        }
    }, []);
    return <Switch>{routes}</Switch>
}

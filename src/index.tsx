import React from 'react';
import {HashRouter, Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import '@/assets/styles/index.less'
import createRoutes from "@/router/routes";
import dva from 'dva'
import {history} from "@/utils/history";
import {ConfigProvider} from 'antd'
import locale from 'antd/es/locale/zh_CN'

const app = dva({history})

app.model(require('@/models/login').default)
app.model(require('@/models/global').default)

app.router(() => {
    return (
        <ConfigProvider locale={locale}>
            <HashRouter>
                <Router history={history}>
                    {createRoutes()}
                </Router>
            </HashRouter>
        </ConfigProvider>
    )
})

app.start('#root');

serviceWorker.unregister();

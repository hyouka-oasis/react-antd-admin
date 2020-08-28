import React from 'react';
import {Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import '@/assets/styles/index.less'
import createRoutes from "@/router/routes";
import dva from 'dva'
import {history} from "@/utils/history";

const app = dva({history})

app.model(require('@/models/login').default)
app.model(require('@/models/global').default)

app.router(({history}: any) => {
    return(
        <Router history={history}>{createRoutes()}</Router>
    )
})

app.start('#root');

serviceWorker.unregister();

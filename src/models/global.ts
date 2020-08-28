import {Effect} from "@/utils/Effect";
import {Reducer} from 'redux'
import {getMenu} from "@/api/basicApi";

export interface GlobalState {
    asyncMenu: Array<RouteConfig> | []
}

interface GlobalType {
    namespace: 'global';
    state: GlobalState;
    effects: {
        getMenu: Effect
    },
    reducers: {
        changeMenu: Reducer<GlobalState>
    }
}

const global: GlobalType = {
    namespace: "global",
    state: {
        asyncMenu: []
    },
    effects: {
        /**
         *
         * @param payload state?: any
         * @param put action: Reducer
         * @param call 调用函数
         * 在这里处理你的权限管理
         */
        * getMenu({payload}, {put, call}) {
            const menu = yield call(getMenu, payload)
            if (menu.length > 0) {
                yield put({
                    type: 'changeMenu',
                    payload: menu
                })
            }
        }
    },
    reducers: {
        changeMenu(state, {payload}) {
            return {
                ...state,
                asyncMenu: payload
            }
        }
    }
}

export default global

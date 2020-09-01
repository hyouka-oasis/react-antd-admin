import {Effect} from "@/utils/Effect";
import {Reducer} from 'redux'
import {getMenu} from "@/api/basicApi";

const getFlatMenu = (menu: Array<MenuProp>): Array<MenuProp> => {
    let flatMenu: Array<any> = [];
    menu.forEach((item: MenuProp) => {
        if (item.children && item.children.length > 0) {
            flatMenu = flatMenu.concat(getFlatMenu(item.children))
        }
        flatMenu.push(item)
    })
    return flatMenu
}

export interface GlobalState {
    asyncMenu: Array<RouteConfig> | [];
    flatMenu: typeof getFlatMenu | Array<MenuProp>;
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
        asyncMenu: [],
        flatMenu: []
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
            const loopPath = (loopMenu: Array<MenuProp>, parentItem: {parentPath?: string | string[]; path?: string} = {}) => {
                loopMenu.forEach((item: MenuProp) => {
                    if(parentItem.path) {
                        item.parentPath = parentItem.parentPath ? parentItem.parentPath.concat(parentItem.path) : [parentItem.path]
                    }
                    if(item.children && item.children.length) {
                        loopPath(item.children, item)
                    }
                })
            }
            loopPath(menu)
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
                asyncMenu: payload,
                flatMenu: getFlatMenu(payload)
            }
        }
    }
}

export default global

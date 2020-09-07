import {Effect} from "@/utils/Effect";
import {Reducer} from 'redux'
import {LoginApi} from "@/api/login";
import {clearStotage, setStorage} from "@/utils/storageUtil";
import {history} from "@/utils/history";

export interface LoginState {
    username: string | number;
    password: string;
    remember?: undefined | boolean;
}

interface LoginType {
    namespace: 'login';
    state: LoginState;
    effects: {
        Login: Effect;
        Logout: Effect;
    },
    reducers: {
        changeState: Reducer<LoginState>
    }
}

const loginModel: LoginType = {
    namespace: "login",
    state: {
        username: '',
        password: '',
        remember: undefined
    },
    effects: {
        * Login({payload}, {put, call}) {
            const response = yield call(LoginApi, payload)
            yield put({
                type: 'changeState',
                payload: response
            })
            if(Object.keys(response).length > 0) {
                const {roles} = response
                yield setStorage('roles', roles)
                yield history.push({
                    pathname: '/'
                })
            }
        },
        * Logout() {
            yield history.push({
                pathname: '/user/login'
            })
            yield clearStotage()
        }
    },
    reducers: {
        changeState(state, {payload}) {
            return {
                ...state,
                ...payload
            }
        }
    }
}

export default loginModel

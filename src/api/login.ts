interface LoginProp {
    username: 'admin' | 'user' | 'Hyouka';
    password: any,
}

type LoginState = {roles: string}

export const LoginApi = (data: LoginProp): Promise<LoginState> => {
    return new Promise((resolve, reject) => {
        resolve({roles: '管理员', ...data})
        reject('登陆失败')
    })
}

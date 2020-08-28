export const getMenu = (): Promise<Array<MenuProp>> => {
    return new Promise((resolve) => {
        const menu = [
            {
                meta: {
                    title: '首页',
                },
                path: '/dashboard',
                icon: 'DashboardOutlined',
            },
            {
                meta: {
                    title: '首页1',
                },
                path: '/dashboard1',
                icon: 'DashboardOutlined',
            },
        ]
        resolve(menu)
    })
}

export const getMenu = (): Promise<Array<MenuProp>> => {
    return new Promise((resolve) => {
        const menu = [
            {
                meta: {
                    title: '默认页',
                },
                path: '/dashboard',
                icon: 'DashboardOutlined',
            },

        ]
        resolve(menu)
    })
}

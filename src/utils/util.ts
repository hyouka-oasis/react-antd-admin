const {pathToRegexp} = require('path-to-regexp')

export function conversionPath (path: string) {
    if (path && path.indexOf('http') === 0) {
        return path;
    } else {
        return `/${path || ''}`.replace(/\/+/g, '/').replace(/\/:\w+\??/, '');
    }
}

/**
 *
 * @param menu 平级菜单列表
 * @param path 菜单路径
 */
export function getMenuMathKeys (menu: Array<MenuProp>, path: string): any {
    return menu.filter(item => {
        return pathToRegexp(item.path).test(path)
    });
}

export function getMenuSelectKeys (menu: Array<MenuProp>, location: DefaultReactNodeProps['location']) {
    const path = location.pathname
    const selectKeys = getMenuMathKeys(menu, path)[0]
    return selectKeys ? [selectKeys.path] : []
}

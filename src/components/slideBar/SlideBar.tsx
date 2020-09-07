import React, {useState, useEffect} from 'react'
import {Menu, Layout} from 'antd'
import './styles/slider.less'
import classnames from 'classnames'
import {Icon} from '@/components'
import {conversionPath, getMenuSelectKeys} from "@/utils/util";
import {Link} from 'react-router-dom'

const {Sider} = Layout

const {SubMenu, Item} = Menu



interface SlideBarProp {
    menu: Array<MenuProp>;
    themeClass: string;
    flatMenu: Array<MenuProp>;
    currentMenu: {
        parentPath: string[]
    };
    collapsed: boolean;
}

const RenderingIcon = (icon: string | React.ReactNode | undefined) => {
    if (typeof icon === 'string' && icon.indexOf('http') === 0) {
        return (
            <img src={icon} alt="图标" className='sider-menu-item-img'/>
        )
    }
    if (typeof icon === 'string') {
        return (
            <Icon font='antd' antd='true' type={icon}/>
        )
    }
    return icon
}

const SlideBar: React.FC<SlideBarProp & DefaultReactNodeProps> = (prop) => {

    const classname = classnames('sidebar-left', 'sidebar-default')
    const {menu, collapsed, themeClass, location, flatMenu, currentMenu} = prop
    const [openKeys, setOpenKeys] = useState<string[] | undefined>([])
    const selectedKeys = getMenuSelectKeys(flatMenu, location)

    const menuProps = collapsed ? {selectedKeys} : {selectedKeys, openKeys}

    const getMenuPath = (route: MenuProp) => {
        const path = conversionPath(route.path)
        const icon = RenderingIcon(route.icon)
        const {meta} = route
        if (/^https?:\/\//.test(path)) {
            return (
                <a href={path}>
                    {icon}
                    <span>{meta.title}</span>
                </a>
            )
        }
        return (
            <Link to={path}
                  replace={path === location.pathname}
            >
                {icon}
                <span>{meta.title}</span>
            </Link>
        )
    }

    const getNavMenuItem = (menuList: Array<MenuProp>) => {
        if (!menuList) {
            return []
        }
        /**
         * 逐一将MenuProp 换成React.Component = Menu.Item
         * @param menuItem
         */
        const getSubMenuOrItem = (menuItem: MenuProp) => {
            if (menuItem.children && menuItem.children.length > 0) {
                if (getNavMenuItem(menuItem.children) && getNavMenuItem(menuItem.children).length > 0) {
                    return (
                        <SubMenu title={
                            menuItem.icon ?
                                (
                                    <span>
                                        {RenderingIcon(menuItem.icon)}
                                        <span>{menuItem.meta.title}</span>
                                     </span>
                                ) :
                                (
                                    menuItem.meta.title
                                )
                        }
                                 key={menuItem.path}
                        >
                            {getNavMenuItem(menuItem.children)}
                        </SubMenu>
                    )
                }
            } else {
                return (
                    <Item key={menuItem.path}>
                        {getMenuPath(menuItem)}
                    </Item>
                )
            }
        }

        return menuList
            .filter((menuItem: MenuProp) => menuItem.meta.title && !menuItem.hidden)
            .map((menuItem: MenuProp) => {
                return getSubMenuOrItem(menuItem)
            })
            .filter(item => item)
    }

    const handlerOpenKeys = (openKeys?: string[]) => {
        setOpenKeys(openKeys)
    }
    useEffect(() => {
        setOpenKeys(currentMenu ? currentMenu.parentPath : [])
    }, [currentMenu])

    const SliderBar: React.ReactElement = (
        <Sider width={230}
               className={classname}
               trigger={null}
               collapsed={collapsed}
        >
            <div className='slider-left-logo'>
                <span>
                    <img src='https://hyoukam.github.io/react-antd-admin/public/Athena.jpg' alt=""/>
                    {
                        collapsed ? null : <h1>Hyouka Admin</h1>
                    }
                </span>
            </div>
            <div className='sidebar-left-content'>
                <Menu mode="inline"
                      onOpenChange={keys => handlerOpenKeys(keys as string[])}
                      className={`ant-menu-${themeClass}`}
                      {...menuProps}
                >
                    {getNavMenuItem(menu)}
                </Menu>
            </div>
        </Sider>
    )
    return (SliderBar)
}

export default SlideBar

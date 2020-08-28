import React from 'react'
import {Menu, Layout} from 'antd'
import './styles/slider.less'
import classnames from 'classnames'
import {Icon} from '@/components'

const {Sider} = Layout

const {SubMenu, Item} = Menu

interface SlideBarProp {
    menu: Array<MenuProp>;
    collapsedLeftSide: boolean;
    themeClass: string;
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

const SlideBar: React.FC<SlideBarProp> = (prop) => {
    const classname = classnames('sidebar-left', 'sidebar-default')
    const {menu, collapsedLeftSide, themeClass} = prop

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
                        {menuItem.icon ? RenderingIcon(menuItem.icon) : ''}
                        <span>{menuItem.meta.title}</span>
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


    const SliderBar: React.ReactElement = (
        <Sider width={230}
               className={classname}
               trigger={null}
               collapsed={collapsedLeftSide}
        >
            <div className='slider-left-logo'>
                <span>
                    <img src={require('../../assets/images/Athena.jpg')} alt=""/>
                    {
                        collapsedLeftSide ? null : <h1>Hyouka Admin</h1>
                    }
                </span>
            </div>
            <div className='sidebar-left-content'>
                <Menu mode="inline"
                      className={`ant-menu-${themeClass}`}
                >
                    {getNavMenuItem(menu)}
                </Menu>
            </div>
        </Sider>
    )
    return (SliderBar)
}
export default SlideBar

import React, {useState, useEffect} from 'react'
import {getStorage} from "@/utils/storageUtil";
import {useHistory, Switch} from 'react-router-dom'
import classnames from 'classnames'
import {Layout} from 'antd'
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import {SlideBar, GlobalHeader} from '@/components'
import {connect} from 'dva'
import {Dispatch} from "@/utils/Effect";
import {ConnectState} from "@/models/connect";
import './styles/basic.less'
import {getMenuMathKeys} from "@/utils/util";

const {Content, Header} = Layout;


interface BasicLayoutProp {
    collapsedLeftSide: boolean;
    leftCollapsedWidth: number;
    expandTopBar: boolean;
    showSidebarHeader: boolean;
    collapsedRightSide: boolean;
    currentMenu: object;
    isMobile: boolean;
    layout?: object;
    menu: Array<MenuProp>;
    dispatch: Dispatch
}

const BasicLayout: React.FC<DefaultReactNodeProps & BasicLayoutProp> = (prop) => {
    const {location, renderChildren, dispatch, menu, flatMenu} = prop
    const {children} = renderChildren
    const [collapsedLeftSide, setCollapsed] = useState<boolean>(false)
    const history = useHistory()
    const [roles] = useState<string | unknown>(getStorage('roles'))
    const [theme] = useState<{ leftSide: string; navBar: string; layout?: Array<string> }>({
        leftSide: 'darkgrey', // 左边
        navBar: 'light', // 顶部
        ...getStorage('theme') as Array<string>
    })
    const classname = classnames('basic-layout', 'full-layout', {
        'fixed': theme.layout && theme.layout.indexOf('fixedSidebar') !== -1,
        'fixed-header': theme.layout && theme.layout.indexOf('fixedHeader') !== -1,
        'fixed-breadcrumbs': theme.layout && theme.layout.indexOf('fixedBreadcrumbs') !== -1,
        'hided-breadcrumbs': theme.layout && theme.layout.indexOf('hidedBreadcrumbs') !== -1,
    })
    const getCurrentMenu = () => {
        return getMenuMathKeys(flatMenu, location.pathname)[0]
    }

    useEffect(() => {
        (() => {
            if (!roles) {
                history.push({
                    pathname: '/user/login'
                })
            }
        })()

        if (!theme.layout) {
            theme.layout = [
                'fixedHeader',
                'fixedSidebar',
                'fixedBreadcrumbs'
            ];
        }

        dispatch({
            type: 'global/getMenu',
        })
    }, [roles, history, theme, dispatch])

    return (
        <Layout className={classname}>

            <Layout>

                <SlideBar collapsed={collapsedLeftSide} currentMenu={getCurrentMenu()} flatMenu={flatMenu} menu={menu} location={location} themeClass={theme.leftSide} collapsedLeftSide={collapsedLeftSide}/>

                <Content style={{overflow: 'hidden'}}>

                    <Layout className="full-layout">

                        <Header>
                            <GlobalHeader location={location} dispatch={dispatch} collapsed={collapsedLeftSide} setCollapsed={() => {setCollapsed(!collapsedLeftSide)}}/>
                        </Header>

                        <SwitchTransition>
                            <CSSTransition
                                key={location.pathname}
                                classNames="fade"
                                timeout={500}
                            >
                                <Content className="router-page">
                                    <Switch location={location}>{children}</Switch>
                                </Content>
                            </CSSTransition>
                        </SwitchTransition>
                    </Layout>

                </Content>

            </Layout>
        </Layout>
    )
}
export default connect(({global, login}: ConnectState) => ({
    menu: global.asyncMenu,
    login,
    ...global
}))(BasicLayout)

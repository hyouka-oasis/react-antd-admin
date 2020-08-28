import React, {useState, useEffect} from 'react'
import classnames from 'classnames'
import './styles/index.less'
import {Icon, FullScreenIcon, Breadcrumb} from '@/components'
import AvatarDropdown from "@/components/header/AvatarDropdown";
import {GlobalFullScreen} from "@/utils/fullScreen";
import {Dispatch} from "@/utils/Effect";

interface GlobalHeaderProp extends DefaultReactNodeProps{
    setCollapsed: React.ReactEventHandler;
    collapsed: boolean;
    dispatch: Dispatch;
}

const GlobalHeader: React.FC<GlobalHeaderProp> = (prop) => {
    const {setCollapsed, collapsed, dispatch, location} = prop
    const classname = classnames('ant-header')
    const [fullscreen, setFullscreen] = useState<boolean>(false)
    useEffect(() => {
        document.onfullscreenchange = () => {
            setFullscreen(!!document.fullscreenElement);
        };
    }, []);
    return(
        <div className={classname}>

            <span className='ant-header-trigger' onClick={setCollapsed}>
                <Icon type={collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'} antd='true' font=''/>
            </span>

            <Breadcrumb location={location}/>

            <div className='ant-header-right'>
                <span className='avatar-dropdown avatar-dropdown-action'
                      onClick={() => {
                          GlobalFullScreen(document.documentElement)
                          setFullscreen(!document.fullscreenElement)
                      }}
                >
                   <FullScreenIcon fullscreen={fullscreen} />
                </span>
                <AvatarDropdown dispatch={dispatch}/>
            </div>
        </div>
    )
}
export default GlobalHeader

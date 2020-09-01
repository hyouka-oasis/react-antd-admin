import React from 'react'
import {Avatar, Dropdown, Menu} from 'antd'
import {LogoutOutlined, GithubOutlined, UserOutlined} from '@ant-design/icons';
import {getStorage} from "@/utils/storageUtil";
import {Dispatch} from "@/utils/Effect";


const {Item, Divider} = Menu

const AvatarDropdown: React.FC<{dispatch: Dispatch}> = (prop) => {
    const {dispatch} = prop

    const avatarName = getStorage('roles')

    const menuDropdown = (
        <Menu onClick={({key}) => {
            switch (key) {
                case 'logout':
                    dispatch({
                        type: 'login/Logout'
                    })
                    return false;
                default:
                    return false
            }
        }}>
            <Item key='center'>
                <UserOutlined/>
                个人中心
            </Item>
            <Item key='github'>
                <GithubOutlined/>
                GitHub地址
            </Item>
            <Divider/>
            <Item key='logout'>
                <LogoutOutlined/>
                退出登录
            </Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menuDropdown} className='avatar-dropdown'>
            <span className='avatar-dropdown-action'>
                <Avatar size="small" className='avatar-dropdown-avatar' src='https://hyoukam.github.io/react-antd-admin/public/Athena.jpg' alt='头像'/>
                <span>
                    {avatarName as React.ReactNode}
                </span>
            </span>
        </Dropdown>
    )
}

export default AvatarDropdown

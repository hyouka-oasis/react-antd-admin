import React from 'react'
import {Switch} from 'react-router-dom'
import {Layout} from 'antd'
import './styles/user.less'


const {Content} = Layout

const UserLayout: React.FC<DefaultReactNodeProps> = (prop) => {
    const {renderChildren} = prop
    const {children} = renderChildren
    return(
        <Layout className="full-layout user-layout fixed">
            <Content>
                <Switch>{children}</Switch>
            </Content>
        </Layout>
    )
}

export default UserLayout

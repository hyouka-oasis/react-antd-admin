import React, {useState} from 'react'
import {Layout} from 'antd'
import {Spin, Form, Input, Button, Checkbox} from 'antd'
import './index.less'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {connect} from 'dva'
import {ConnectState} from "@/models/connect";
import {Dispatch} from "@/utils/Effect";
import {LoginState} from "@/models/login";

interface LoginProps {
    dispatch: Dispatch;
    formLogin: LoginState
}

const {Content} = Layout
const {Item} = Form

const Login: React.FC<LoginProps & DefaultReactNodeProps> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const handlerSubmit = (values: { username: "admin" | "user" | "Hyouka"; password: string }) => {
        const {dispatch} = props
        dispatch({
            type: 'login/Login',
            payload: {...values}
        })
        setLoading(false)
    }
    return (
        <Layout className="full-layout login-page">
            <Content>
                <Spin tip='登陆中...' spinning={loading}>
                    <Form className="login-form" onFinish={handlerSubmit}>
                        <div className='user-img'>
                            <img src='https://hyoukam.github.io/react-antd-admin/public/Athena.jpg' alt="logo"/>
                            <b>HYOUKA</b>
                            <span>-</span>
                            <span>Admin</span>
                        </div>
                        <Item name='username' rules={[{required: true, message: '请输入您的用户名，示例admin'}]}>
                            <Input
                                size="large"
                                prefix={<UserOutlined/>}
                                placeholder="用户名"
                            />
                        </Item>
                        <Item name='password' rules={[{required: true, message: '请输入您的密码，示例admin'}]}>
                            <Input
                                size="large"
                                prefix={<LockOutlined/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Item>
                        <Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Item>
                        <a className="login-form-forgot" href="/">
                            忘记密码
                        </a>
                        <Item>
                            <Button size="large" className="login-form-button" type={'primary'} htmlType={'submit'}>
                                登陆
                            </Button>
                        </Item>
                        <div className="new-user">
                            新用户？<a href='/'>现在注册</a>
                        </div>
                    </Form>
                </Spin>
            </Content>
        </Layout>
    )
}
export default connect(
    ({login}: ConnectState) => ({
        formLogin: login,
    })
)(Login);

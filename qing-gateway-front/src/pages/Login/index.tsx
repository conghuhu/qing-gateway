import styles from './index.module.css'
import loginUrl from '@/assets/login4.svg'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { login } from '@/api/GlobalService';
import { history } from 'ice';
import { useRequest } from 'ice';
export default function Login() {
    const { data: token, loading, request: loginName } = useRequest(login, {
        onSuccess: (data) => {
            message.success('登录成功！')
            localStorage.setItem("token",data)
            history?.push('/');
        },
    })
    const onFinish = async (values: any) => {
        await loginName(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        // message.error(errorInfo)
    };
    return (
        <div className={styles.cointainer}>
            <div className={styles.title}>Qing Gateway管理平台</div>
            <img src={loginUrl} className={styles.left} />
            <div className={styles.Login}>
                <span>Login</span>
                <Form
                    name="basic"
                    style={{ "width": "80%" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入邮箱账户!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

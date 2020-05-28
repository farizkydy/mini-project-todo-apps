import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class LogInPage extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-form">
                        <div className="layout-form__text-wrapper">
                            <p style={{ margin: "18px 0 0 15px" }}>Todos</p>
                            <h3>Hello, Friend!</h3>
                            <p style={{ margin: " 0 10px" }}>Enter your personal details and</p>
                            <p style={{ margin: " 10px 20px" }}>start your journey with us</p>
                            <button><Link to="/">Sign up</Link></button>
                        </div>
                        <div className="layout-form__content">
                            <h2>Sign in to Task Manager</h2>
                            <ul>
                                <li><Link to="/"><img src={require("../assets/images/212.svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/g+.svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/li.jpg")} /></Link></li>
                            </ul>
                            <p className="small-text">or use your email account</p>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}

                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    placeholder="Email"
                                    required=""
                                    rules={[{ required: true, message: 'Input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    placeholder="password"
                                    rules={[{ required: true, message: 'Input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" className="signIn__button">
                                        SIGN IN
        </Button>
                                </Form.Item>
                            </Form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default LogInPage;
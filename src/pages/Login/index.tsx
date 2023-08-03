import React, { useEffect } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Row, Col, Card, notification } from "antd";

import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

// the login mock is use pre defined username and hashed pasword using bycrypt
// the validation is quite simple using antd validation and form for required data
// the username and password compare will be done after the validation is complete and user submit the data

const testUser: LoginFormValues = {
	username: "admin",
	password: "$2a$13$UH8uzt9RgWnmmz02QbE6lus4fOCvI7YLn4er9qr2V7BOkruccPyha",
};

interface LoginFormValues {
	username: string;
	password: string;
}

type NotificationType = "success" | "info" | "warning" | "error";

const Login: React.FC<any> = () => {
	const token = localStorage.getItem("token");
	let navigate = useNavigate();
	const [api, contextHolder] = notification.useNotification();

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	const openNotification = (
		type: NotificationType,
		title: string,
		message: string
	) => {
		api[type]({
			message: title,
			description: message,
		});
	};
	const onFinish = (values: LoginFormValues) => {
		comparePassword(values.password, testUser.password).then((e) => {
			// this is comparing the hash pasword condition and send error message if not match
			if (values.username === testUser.username && e) {
				localStorage.setItem("token", "token");
				navigate("/");
			} else {
				openNotification(
					"error",
					"Login Error",
					"Username or Password not match"
				);
			}
		});
	};
	const comparePassword = async (
		password: string,
		hash: string
	): Promise<boolean> => {
		// th
		return bcrypt.compare(password, hash);
	};

	return (
		<div style={{ background: "rgb(240, 242, 245)" }}>
			{contextHolder}
			<Row
				justify="space-around"
				align="middle"
				style={{ height: "100vh" }}
			>
				<Col span={8}>
					<Card title="Login Form" bordered={false}>
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true,
							}}
							scrollToFirstError
							onFinish={onFinish}
						>
							<Form.Item
								name="username"
								rules={[
									{
										required: true,
										message: "Please input your Username!",
									},
								]}
								hasFeedback
							>
								<Input
									prefix={
										<UserOutlined className="site-form-item-icon" />
									}
									placeholder="Username"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your Password!",
									},
								]}
								hasFeedback
							>
								<Input
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit" block>
									Log In
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Login;

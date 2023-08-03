import React, { useEffect } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Row, Col, Card, theme } from "antd";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const token = localStorage.getItem("token");
	let navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);
	const onFinish = (values: LoginFormValues) => {
		console.log("Form values:", values);
		// Add your login logic here
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div style={{ background: "rgb(240, 242, 245)" }}>
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
								<Button type="primary" block>
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

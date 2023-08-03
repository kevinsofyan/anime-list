import { Button, Col, Layout, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
	let navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<div className="navbar">
			<Layout.Header
				className="container"
				style={{
					position: "sticky",
					top: 0,
					zIndex: 1,
					width: "100%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Row justify="end">
					<Col span={1}>
						<Button ghost onClick={handleLogout}>
							Logout
						</Button>
					</Col>
				</Row>
			</Layout.Header>
		</div>
	);
};

export default Navbar;

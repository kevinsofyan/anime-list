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
			<Layout.Header className="container">
				<Row justify="end">
					<Col md={1} sm={3}>
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

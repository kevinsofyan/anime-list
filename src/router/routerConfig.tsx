import {
	Navigate,
	RouteObject,
	useLocation,
	useNavigate,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
import { Layout } from "antd";
import Navbar from "../components/navbar";
import Content from "../components/mainContent";
import MainContent from "../components/mainContent";
import { Footer } from "antd/es/layout/layout";
import SideArea from "../components/sideArea";

export type CustomRouterConfig = RouteObject & {
	isProtected?: boolean;
	isPublicOnly?: boolean;
	redirectUrl?: string;
};

const routes: CustomRouterConfig[] = [
	{
		path: "/login",
		element: <Login />,
		isPublicOnly: true,
	},
	{
		path: "/",
		isProtected: true,
		element: <Home />,
	},
	{
		path: "*", // This is the 404 route
		element: <NotFound />,
	},
];

const PrivateRouter: React.FC<CustomRouterConfig> = ({ element }) => {
	const token = localStorage.getItem("token");
	const isAuthenticated = !!token;
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return (
		<Layout hasSider>
			<SideArea />
			<Layout className="site-layout" style={{ marginLeft: 200 }}>
				<Navbar />
				<MainContent element={element} />
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export { routes, PrivateRouter };

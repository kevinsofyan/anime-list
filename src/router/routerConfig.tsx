import { Navigate, RouteObject } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { Layout } from "antd";
import Navbar from "../components/navbar";
import MainContent from "../components/mainContent";
import { Footer } from "antd/es/layout/layout";
import Detail from "../pages/Detail";

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
		path: "/details/:id?",
		isProtected: true,
		element: <Detail />,
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
		<Layout className="site-layout">
			<Navbar />
			<MainContent element={element} />
			<Footer style={{ textAlign: "center" }}>Kevin Sofyan ©2023</Footer>
		</Layout>
	);
};

export { routes, PrivateRouter };

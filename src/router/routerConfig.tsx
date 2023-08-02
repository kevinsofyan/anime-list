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

	return element;
};

export { routes, PrivateRouter };

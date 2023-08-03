import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { routes, PrivateRouter } from "./routerConfig";
import NotFound from "../pages/NotFound";

const DefaultRouter: React.FC = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={
						route.isProtected ? (
							<PrivateRouter {...route} />
						) : (
							route.element
						)
					}
				/>
			))}
			<Route path="*" element={<NotFound />} />{" "}
		</Routes>
	);
};

export default DefaultRouter;

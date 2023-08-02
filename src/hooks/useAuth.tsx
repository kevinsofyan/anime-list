import { useState, useEffect } from "react";

const useAuth = (): boolean => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const userIsAuthenticated = !!token;
		setIsAuthenticated(userIsAuthenticated);

		// this can be done if you need to verify or validate token
		// if (token) {
		//     const response = await fetch('/api/some-api-to-verify-token', {
		//       method: 'POST',
		//       headers: {
		//         'Authorization': `Bearer ${token}`,
		//       },
		//     });
		//     if (response.ok) {
		//         setIsAuthenticated(true);
		//       } else {
		//         setIsAuthenticated(false);
		//       }
		//     }
	}, []);

	return isAuthenticated;
};

export default useAuth;

import axios, { AxiosError } from "axios";

// Interface for the response data you expect from the API
export interface ApiResponse<T = any> {
	data?: T;
	status: number;
	message?: string;
}

// Generic function to handle API requests
export async function apiRequest<T>(
	method: "GET" | "POST" | "PUT" | "DELETE",
	url: string,
	data?: any
): Promise<ApiResponse<T>> {
	try {
		const response = await axios.request<T>({
			method,
			url,
			data,
		});
		return {
			data: response.data,
			status: response.status,
		};
	} catch (e) {
		// Handle error responses here if needed
		let error = e as AxiosError;
		return {
			status: error.response?.status || 500,
			message: "An error occurred",
		};
	}
}

export function jsonToQueryParams(obj: Record<string, any>): string {
	const queryString = Object.entries(obj)
		.filter(([, value]) => value !== undefined && value !== "")
		.map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		)
		.join("&");

	return queryString ? `?${queryString}` : "";
}

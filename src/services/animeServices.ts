import { jsonToQueryParams } from "../utils/jsonToQueryParams";
import { ApiResponse, apiRequest } from "./service";

const baseUrl = "https://api.jikan.moe/v4/anime";

export interface IAnimeListParams {
	q: string;
	sfw: boolean;
	limit: number;
	type: string;
	page: number;
}

async function getAnimeList<T>(
	params: IAnimeListParams
): Promise<ApiResponse<T>> {
	const queryParams = jsonToQueryParams(params);
	return apiRequest<T>("GET", `${baseUrl}${queryParams}`);
}

async function getAnimeDetail<T>(id: any): Promise<ApiResponse<T>> {
	return apiRequest<T>("GET", `${baseUrl}/${id}`);
}
const animeServices = {
	getAnimeList,
	getAnimeDetail,
};

export default animeServices;

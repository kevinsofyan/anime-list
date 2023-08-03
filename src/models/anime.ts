export interface IAnimeList {
	mal_id: number;
	title: string;
	images?: {
		jpg: {
			image_url: string;
			large_image_url: string;
		};
	};
	status: string;
	synopsis: string;
	score: number;
	scored_by: number;
	type: string;
	members: number;
	popularity: number;
}

export interface IAnimeDetail extends IAnimeList {
	studios: [
		{
			name: string;
		}
	];
	title_japanese: string;
	broadcast: {
		day: string;
		string: string;
	};
	approved: boolean;
	background: string;
	episodes: number;
	url: string;
	year: number;
	themes: [
		{
			name: string;
			url: string;
		}
	];
}

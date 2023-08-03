import { useEffect, useState } from "react";
import { Col, Divider, Row, Spin, Switch } from "antd";
import { debounce } from "lodash";

import animeServices, { IAnimeListParams } from "../../services/animeServices";
import { ApiResponse } from "../../services/service";
import InputSearch from "../../components/InputSearch";
import List from "../../components/list";
import "./home.scss";
import InputDropdown from "../../components/inputDropdown";
import { IAnimeList } from "../../models/anime";

const filterType = [
	{
		value: "tv",
		label: "TV",
	},
	{
		value: "movie",
		label: "Movie",
	},
	{
		value: "ova",
		label: "OVA",
	},
	{
		value: "special",
		label: "Special",
	},
];

function Home() {
	const [isLoading, setIsloading] = useState<boolean>(false);
	const [currentPagination, setCurrentPagination] = useState<any>(null);
	const [listData, setListData] = useState<IAnimeList[]>([]);
	const [params, setParams] = useState<IAnimeListParams>({
		q: "",
		type: "",
		limit: 10,
		page: 1,
		sfw: true,
	});

	useEffect(() => {
		handleFetch();
	}, [params]);

	const handleFetch = async () => {
		try {
			setIsloading(true);
			window.scrollTo(0, 0);
			const response: ApiResponse = await animeServices.getAnimeList(
				params
			);
			setListData(response.data?.data);
			setCurrentPagination(response.data?.pagination);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsloading(false);
		}
	};

	const debouncedSearch = debounce((keyword: string) => {
		handleFilter(keyword, "q");
	}, 800);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const keyword = event.target.value;
		debouncedSearch(keyword);
	};

	const handleFilter = (e: string | number | boolean, target: string) => {
		setParams((prevState) => ({
			...prevState,
			[target]: e,
			page: 1,
		}));
	};

	const handlePagination = (e: number) => {
		setParams((prevState) => ({
			...prevState,
			page: e,
			q: "",
		}));
	};

	return (
		<div>
			<Row gutter={16}>
				<Col span={24}>
					<h1>Anime Lists</h1>
				</Col>
			</Row>
			<Row gutter={[16, 20]}>
				<Col md={12} sm={24} xs={24}>
					<InputSearch
						placeholder="Search anime name"
						onChange={handleSearchChange}
						allowClear
					/>
				</Col>
				<Col md={4} sm={24} xs={24}>
					<InputDropdown
						options={filterType}
						onChange={(e) => {
							handleFilter(e, "type");
						}}
						placeholder="Select Anime Type"
						allowClear
					/>
				</Col>
				<Col span={2}>
					<Switch
						checkedChildren="sfw"
						unCheckedChildren="nsfw"
						defaultChecked
						onChange={(e) => {
							handleFilter(e, "sfw");
						}}
					/>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Divider />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Spin tip="Loading..." spinning={isLoading} size="large">
						<List
							currentPagination={currentPagination}
							data={listData}
							params={params}
							handlePagination={handlePagination}
						/>
					</Spin>
				</Col>
			</Row>
		</div>
	);
}

export default Home;

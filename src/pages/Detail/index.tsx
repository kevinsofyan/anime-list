import { useEffect, useState } from "react";
import {
	Row,
	Col,
	Card,
	Image,
	Typography,
	Divider,
	List as AntdList,
	Rate,
	Breadcrumb,
	Tag,
	Spin,
} from "antd";
const { Title, Text } = Typography;

import "./detail.scss";
import { NavLink, useParams } from "react-router-dom";
import { ApiResponse } from "../../services/service";
import animeServices from "../../services/animeServices";
import { IAnimeDetail } from "../../models/anime";

function Detail() {
	let { id } = useParams();
	const [detailData, setDetailData] = useState<IAnimeDetail>();
	const [isLoading, setIsloading] = useState<boolean>(false);

	useEffect(() => {
		handleFetch();
	}, [id]);

	const handleFetch = async () => {
		try {
			setIsloading(true);
			window.scrollTo(0, 0);
			const response: ApiResponse = await animeServices.getAnimeDetail(
				id
			);
			setDetailData(response.data?.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsloading(false);
		}
	};

	return (
		<div className="home-page">
			<Spin tip="Loading..." spinning={isLoading} size="large">
				<Row>
					<Breadcrumb
						style={{ marginBottom: 30 }}
						items={[
							{
								title: <NavLink to={"/"}>Anime List</NavLink>,
							},
							{
								title: detailData?.title,
							},
						]}
					/>
				</Row>
				<Row gutter={16}>
					{/* Left Section with Anime Image */}
					<Col xs={24} md={8} style={{ textAlign: "center" }}>
						<Image
							src={detailData?.images?.jpg.large_image_url}
							alt={detailData?.title}
						/>
						<Card.Meta title={"Year Aired: " + detailData?.year} />
					</Col>
					<Col xs={24} md={16}>
						<Title level={2}>{detailData?.title}</Title>
						<Text>{detailData?.title_japanese}</Text>
						<br />
						<AntdList
							itemLayout="horizontal"
							dataSource={detailData?.themes}
							style={{ marginTop: 20 }}
							renderItem={(theme) => (
								<NavLink to={theme.url}>
									<Tag color="">{theme.name}</Tag>
								</NavLink>
							)}
						/>
						<Divider />

						<Text>{detailData?.synopsis}</Text>
						<Divider />
						<Row gutter={[16, 20]}>
							<Col md={8} sm={24} xs={24}>
								<Card>
									<Text strong>Anime Type</Text>
									<br />
									<Text>{detailData?.type}</Text>
								</Card>
							</Col>
							<Col md={8} sm={24} xs={24}>
								<Card>
									<Text strong>Status</Text>
									<br />
									<Text>{detailData?.status}</Text>
								</Card>
							</Col>
							<Col md={8} sm={24} xs={24}>
								<Card>
									<Text strong>Rating</Text> <br />
									<Rate allowHalf value={detailData?.score} />
								</Card>
							</Col>
						</Row>
						<Divider />
					</Col>
				</Row>

				<Divider />
				<Title level={3}>Background</Title>
				<Text>{detailData?.background}</Text>
				<Divider />
				<Title level={3}>Studios</Title>
				<AntdList
					itemLayout="horizontal"
					dataSource={detailData?.studios}
					renderItem={(studio) => (
						<AntdList.Item>
							<AntdList.Item.Meta title={studio.name} />
						</AntdList.Item>
					)}
				/>
				<Divider />
			</Spin>
		</div>
	);
}

export default Detail;

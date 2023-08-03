import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {
	Avatar,
	List as AntdList,
	Space,
	Rate,
	Badge,
	Row,
	Col,
	Divider,
} from "antd";

import "./list.scss";
import { IAnimeListParams } from "../../services/animeServices";
import { NavLink } from "react-router-dom";
import { IAnimeList } from "../../models/anime";

const data = Array.from({ length: 23 }).map((_, i) => ({
	href: "https://ant.design",
	title: `ant design part ${i}`,
	avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
	description:
		"Ant Design, a design language for background applications, is refined by Ant UED Team.",
	content:
		"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

interface propsType {
	data: IAnimeList[];
	params: IAnimeListParams;
	handlePagination: any;
	currentPagination: any;
}

const List: React.FC<propsType> = ({
	data,
	params,
	currentPagination,
	handlePagination,
}) => {
	const { limit } = params;
	return (
		<div className="list">
			<AntdList
				itemLayout="vertical"
				size="large"
				dataSource={data}
				pagination={{
					onChange: (page) => {
						handlePagination(page);
					},
					pageSize: limit,
					current: currentPagination?.current_page || 1,
					total: currentPagination?.items.total,
					pageSizeOptions: [10],
				}}
				renderItem={(item) => (
					<NavLink to={`/details/${item.mal_id}`}>
						<Badge.Ribbon text={item.type}>
							<Row>
								<Col
									lg={5}
									md={24}
									sm={24}
									xs={24}
									className="list__image"
								>
									<img
										alt="logo"
										src={item.images?.jpg.image_url}
									/>
								</Col>
								<Col lg={19} md={24} sm={24} xs={24}>
									<AntdList.Item
										key={item.title}
										actions={[
											<IconText
												icon={StarOutlined}
												text={String(item.popularity)}
												key="list-vertical-star-o"
											/>,
											<IconText
												icon={LikeOutlined}
												text={String(item.scored_by)}
												key="list-vertical-like-o"
											/>,
										]}
									>
										<AntdList.Item.Meta
											title={item.title}
											description={
												<Rate
													allowHalf
													value={item.score}
												/>
											}
										/>
										{item.synopsis}
									</AntdList.Item>
								</Col>
							</Row>
							<Divider />
						</Badge.Ribbon>
					</NavLink>
				)}
			/>
		</div>
	);
};

export default List;

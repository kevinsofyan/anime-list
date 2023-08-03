import React from "react";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { List as AntdList, Space, Rate, Badge, Row, Col, Divider } from "antd";

import "./list.scss";
import { IAnimeListParams } from "../../services/animeServices";
import { NavLink } from "react-router-dom";
import { IAnimeList } from "../../models/anime";

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

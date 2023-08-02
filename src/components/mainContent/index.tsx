import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";

const items2: MenuProps["items"] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});

interface ContentProps {
	element: ReactNode;
}

const MainContent: React.FC<ContentProps> = ({ element }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout.Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
			<Layout style={{ padding: "24px 0", background: colorBgContainer }}>
				<Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
					{element}
				</Layout.Content>
			</Layout>
		</Layout.Content>
	);
};

export default MainContent;

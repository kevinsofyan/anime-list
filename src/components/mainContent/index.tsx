import React, { ReactNode } from "react";
import { Layout, theme } from "antd";

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

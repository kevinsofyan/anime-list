import React from "react";
import { Select, SelectProps } from "antd";

import "./inputDropdown.scss";

const InputDropdown: React.FC<SelectProps> = (props) => (
	<div className="input-dropdown">
		<Select style={{ width: "100%" }} {...props} />
	</div>
);

export default InputDropdown;

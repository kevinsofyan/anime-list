import React from "react";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";

import "./inputSearch.scss";

const { Search } = Input;

const InputSearch: React.FC<SearchProps> = (props) => (
	<div className="input-search">
		<Search {...props} />
	</div>
);

export default InputSearch;

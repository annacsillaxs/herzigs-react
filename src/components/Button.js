import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ data }) => {
	const { btn, url } = data;
	return (
		<button>
			<NavLink exact to={url}>
				{btn}
			</NavLink>
		</button>
	);
};

export default Button;

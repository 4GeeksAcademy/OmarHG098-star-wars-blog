import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark my-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light"><i className="fas fa-home"></i></span>
			</Link>
		</nav>
	);
};

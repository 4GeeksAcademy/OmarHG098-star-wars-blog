import React from "react";
import "../../styles/home.css";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<div><img className="img-fluid" src="https://logolook.net/wp-content/uploads/2021/07/Star-Wars-Logo.png"/></div>
		<People/>
		<Planets/>
		<Vehicles/>
		
	</div>
);

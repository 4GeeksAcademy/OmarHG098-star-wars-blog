import React from "react";
import "../../styles/home.css";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<People/>
		<Planets/>
		<Vehicles/>
		
	</div>
);

import React from "react";
import "../../styles/home.css";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-2">
		<img className="home-img my-4" src="https://www.pngall.com/wp-content/uploads/13/Star-Wars-Logo-Transparent.png"></img>
		<People/>
		<Planets/>
		<Vehicles/>
		
	</div>
);

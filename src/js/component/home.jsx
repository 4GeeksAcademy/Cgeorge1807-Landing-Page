import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<Card/>
			<Card/>
		</div>
	);
};

export default Home;

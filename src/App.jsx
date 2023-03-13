import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import { themeChange } from "theme-change";

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		return localStorage.getItem("theme") === "myDark" ? true : false;
	});

	useEffect(() => {
		themeChange(false);

		console.log(isDarkTheme);
	}, []);

	return (
		<div
			className={`text-sm sm:text-base ${
				isDarkTheme ? "text-myLightText" : ""
			}`}
		>
			<Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

			<main>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/details/:country" element={<Details />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;

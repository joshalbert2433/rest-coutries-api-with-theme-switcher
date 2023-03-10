import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/details/:country" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;

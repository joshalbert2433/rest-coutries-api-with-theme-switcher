import React, { useState } from "react";
import CardCountry from "../components/CardCountry";
import InputSearch from "../components/InputSearch";
import SelectRegion from "../components/SelectRegion";
import { useQuery } from "@tanstack/react-query";
import { getCountriesByRegion, getCountriesByName } from "../api/RestCountries";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/UseDebounce";
import Country from "../components/Country";

function Home() {
	const [region, setRegion] = useState("all");
	const [countriesData, setCountriesData] = useState([]);
	const [search, setSearch] = useState("");

	return (
		<div className="min-h-screen bg-base-100 text-sm px-4 py-6 ">
			<InputSearch setSearch={setSearch} search={search} />
			<SelectRegion setRegion={setRegion} />
			<div className="px-12 mt-14 grid gap-12">
				<Country
					region={region}
					setRegion={setRegion}
					countriesData={countriesData}
					setCountriesData={setCountriesData}
					search={search}
					setSearch={setSearch}
				/>
			</div>
		</div>
	);
}

export default Home;

import React, { useState } from "react";
import CardCountry from "../components/CardCountry";
import InputSearch from "../components/InputSearch";
import SelectRegion from "../components/SelectRegion";
import { useQuery } from "@tanstack/react-query";
import { getCountriesByRegion, getCountriesByName } from "../api/RestCountries";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/UseDebounce";

function Home() {
	const [region, setRegion] = useState("all");
	const [countriesData, setCountriesData] = useState([]);
	const [search, setSearch] = useState("");

	const debounceSearch = useDebounce(search, 300);

	const countriesRegionQuery = useQuery({
		queryKey: ["countries", region],
		queryFn: () => getCountriesByRegion(region),
		onSuccess: setCountriesData,
	});

	const countriesByNameQuery = useQuery({
		enabled: search !== "",
		queryKey: ["countriesSearch", debounceSearch],
		initialData: [],
		queryFn: () => getCountriesByName(debounceSearch),
		onSuccess: setCountriesData,
	});

	// console.log(countriesByNameQuery);
	console.log(countriesData);

	console.log(countriesByNameQuery);

	if (countriesRegionQuery.isError)
		return <div className="bg-red-200 text-center">Error 404</div>;

	return (
		<div className="min-h-screen bg-base-100 text-sm px-4 py-6 ">
			<InputSearch setSearch={setSearch} search={search} />
			<SelectRegion setRegion={setRegion} />
			<div className="px-12 mt-14 grid gap-12">
				{countriesRegionQuery.isLoading ||
				countriesByNameQuery.isFetching ? (
					<div className="text-center">Loading...</div>
				) : (
					countriesData.map((data) => {
						return (
							<Link
								to={`/details/${data.name}`}
								state={{ data: data }}
								key={data.name}
							>
								<CardCountry data={data} />
							</Link>
						);
					})
				)}

				{/* {countriesByNameQuery.isError && <div>Error 404</div>} */}
			</div>
		</div>
	);
}

export default Home;

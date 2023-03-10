import React from "react";
import CardCountry from "../components/CardCountry";
import InputSearch from "../components/InputSearch";
import SelectRegion from "../components/SelectRegion";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/RestCountries";
import { Link } from "react-router-dom";

function Home() {
	const allCountriesQuery = useQuery({
		queryKey: ["allCountries"],
		queryFn: getAllCountries,
		onError: () => console.log("hello"),
	});

	console.log(allCountriesQuery);
	if (allCountriesQuery.isLoading) return <div>Loading...</div>;

	return (
		<div className="min-h-screen bg-base-100 text-sm px-4 py-6 ">
			<InputSearch />
			<SelectRegion />
			<div className="px-12 mt-14 grid gap-12">
				{allCountriesQuery.data.map((data) => {
					return (
						<Link
							to={`/details/${data.name}`}
							state={{ data: data }}
						>
							<CardCountry data={data} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

import React from "react";
import { getCountriesByName, getCountriesByRegion } from "../api/RestCountries";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/UseDebounce";
import { Link } from "react-router-dom";
import CardCountry from "./CardCountry";

function Country(props) {
	//TODO: WRAP ALL DATA CALL IN API FUNCTION
	const {
		search,
		setSearch,
		countriesData,
		setCountriesData,
		region,
		setRegion,
	} = props;

	console.log(countriesData);

	const debounceSearch = useDebounce(search, 300);

	const countriesRegionQuery = useQuery({
		queryKey: ["countries", region],
		queryFn: () => getCountriesByRegion(region),
		onSuccess: setCountriesData,
		refetchOnWindowFocus: false,
	});

	const countriesByNameQuery = useQuery({
		// enabled: search !== "",
		queryKey: ["countriesSearch", debounceSearch],
		placeholderData: countriesData,
		queryFn: () => getCountriesByName(debounceSearch),
		onSuccess: setCountriesData,
		refetchOnWindowFocus: false,
	});

	if (search === "") {
		setCountriesData(countriesRegionQuery.data);
	}

	if (countriesRegionQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (countriesRegionQuery.isError) {
		return <div>Error 404</div>;
	}

	if (countriesByNameQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (
		countriesByNameQuery.isError &&
		search !== "" &&
		!countriesByNameQuery.isLoading
	) {
		return <div>Country Not Found</div>;
	}
	return (
		<>
			{countriesData.map((data) => {
				return (
					<Link
						to={`/details/${data.name}`}
						state={{ data: data }}
						key={data.name}
					>
						<CardCountry data={data} />
					</Link>
				);
			})}
		</>
	);
}

export default Country;

import React, { useEffect } from "react";
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

	const debounceSearch = useDebounce(search, 300);

	useEffect(() => {
		if (search === "") {
			setCountriesData(countriesRegionQuery.data);
		}
	}, [search]);

	const countriesRegionQuery = useQuery({
		queryKey: ["countries", region],
		queryFn: () => getCountriesByRegion(region),
		onSuccess: setCountriesData,
	});

	const countriesByNameQuery = useQuery({
		enabled: search !== "",
		queryKey: ["countriesSearch", debounceSearch],
		queryFn: () => getCountriesByName(debounceSearch),
		onSuccess: setCountriesData,
	});

	if (countriesRegionQuery.isLoading) {
		return <div>Loading...</div>;
	}
	if (countriesByNameQuery.isFetching) {
		return <div>Loading...</div>;
	}

	if (countriesByNameQuery.isError & (search !== "")) {
		return <div>Country Not Found</div>;
	}

	return (
		<>
			{countriesData?.map((data) => {
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

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryCode } from "../api/RestCountries";

function Details() {
	const location = useLocation();
	const country = location.state.data;

	const {
		name,
		borders,
		population,
		subregion,
		nativeName,
		topLevelDomain,
		currencies,
		languages,
		capital,
		flags,
	} = country;

	const countryCodeQuery = useQuery({
		queryKey: ["countryCode"],
		queryFn: () => getCountryCode(borders),
	});

	return (
		<div className="p-8 lg:mx-8">
			<Link
				to={"/"}
				className="flex w-24 items-center bg-primary px-4 justify-between py-1 rounded-sm shadow shadow-black"
			>
				<HiOutlineArrowNarrowLeft />
				Back
			</Link>
			<div className="mt-14 lg:grid lg:grid-cols-2 lg:items-center">
				<div>
					<img
						src={flags.svg}
						alt=""
						className="w-full h-60 lg:w-[700px] lg:h-[400px] lg:object-cover"
					/>
				</div>

				<div className="">
					<h2 className="text-2xl font-bold my-6 mt-8 lg:mt-0">
						{name}
					</h2>
					<div className="lg:grid lg:grid-cols-2">
						<div className="space-y-2">
							<div>
								<span className="font-semibold">
									Native Name:{" "}
								</span>
								{nativeName}
							</div>
							<div>
								<span className="font-semibold">
									Population:{" "}
								</span>
								{population}
							</div>
							<div>
								<span className="font-semibold">Region: </span>
								{subregion}
							</div>
							<div>
								<span className="font-semibold">
									Sub Region:{" "}
								</span>
								{subregion}
							</div>
							<div>
								<span className="font-semibold">Capital: </span>
								{capital}
							</div>
						</div>

						<div className="space-y-2 mt-10 lg:place-start-end lg:mt-0">
							<div>
								<span className="font-semibold">
									Top Level Domain:
								</span>
								{topLevelDomain}
							</div>
							<div>
								<span className="font-semibold">
									Currencies:{" "}
								</span>
								{currencies?.map((currency) => {
									return currency.name;
								})}
							</div>
							<div className="lg:flex lg:gap-1">
								<span className="font-semibold">
									Language:{" "}
								</span>
								<div className="">
									{languages
										.map((language) => {
											return language.name;
										})
										.join(", ")}
								</div>
							</div>
						</div>
					</div>

					{countryCodeQuery.isFetching ? (
						<div className="mt-8">Searching for borders...</div>
					) : (
						!countryCodeQuery.isError && (
							<div className="mt-8 lg:flex lg:content-center lg:gap-4">
								<div className="text-lg font-semibold lg:w-fit">
									Border Countries:
								</div>
								<div className="grid grid-cols-3 text-center gap-4 mt-3 lg:flex lg:mt-0 lg:flex-wrap lg:w-[80%]">
									{countryCodeQuery?.data?.map((data) => {
										return (
											<div
												className="bg-primary p-1 shadow flex justify-center items-center lg:min-w-[120px] lg:px-2 lg:text-ellipsis"
												key={data.name}
											>
												{data.name}
											</div>
										);
									})}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default Details;

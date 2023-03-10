import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
	const location = useLocation();
	const country = location.state.data;

	console.log(country);

	const {
		name,
		population,
		region,
		subregion,
		nativeName,
		topLevelDomain,
		currency,
		languages,
		capital,
		flags,
	} = country;

	return (
		<div className="p-8 text-sm sm:text-base">
			<Link
				to={"/"}
				className="flex w-24 items-center bg-primary px-4 justify-between py-1 rounded-sm shadow shadow-black"
			>
				<HiOutlineArrowNarrowLeft />
				Back
			</Link>
			<div className="mt-14">
				<img src={flags.png} alt="" className="w-full h-60" />
				<h2 className="text-2xl font-bold my-6 mt-8">Belgium</h2>
				<div className="space-y-2">
					<div>
						<span className="font-semibold">Native Name: </span>
						{nativeName}
					</div>
					<div>
						<span className="font-semibold">Population: </span>
						{population}
					</div>
					<div>
						<span className="font-semibold">Region: </span>
						{subregion}
					</div>
					<div>
						<span className="font-semibold">Sub Region: </span>
						{subregion}
					</div>
					<div>
						<span className="font-semibold">Capital: </span>
						{capital}
					</div>
				</div>

				<div className="space-y-2 mt-10">
					<div>
						<span className="font-semibold">Top Level Domain:</span>
						{topLevelDomain}
					</div>
					<div>
						<span className="font-semibold">Currencies: </span>
						{currency}
					</div>
					<div>
						<span className="font-semibold">Language: </span>
						{languages.map((language) => {
							return language.name;
						})}
					</div>
				</div>

				<div className="mt-8">
					<div className="text-lg font-semibold">
						Border Countries:
					</div>
					<div className="grid grid-cols-3 text-center gap-4 mt-3">
						<div className="bg-primary py-1 shadow">France</div>
						<div className="bg-primary py-1 shadow">Germany</div>
						<div className="bg-primary py-1 shadow">
							Netherlands
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;

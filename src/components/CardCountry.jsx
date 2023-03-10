import React from "react";

function CardCountry({ data }) {
	const { region, capital, name, population, flag } = data;

	return (
		<div className="bg-primary rounded shadow overflow-hidden">
			<img
				src={flag}
				alt="Country Image"
				className="w-full h-[220px] object-cover hover:scale-110 transition-all"
			/>
			<div className="p-8 flex flex-col gap-4">
				<h2 className="text-xl font-bold">{name}</h2>

				<div className="mb-4 space-y-2">
					<div>
						<span className="font-semibold">Population:</span>{" "}
						{population}
					</div>
					<div>
						<span className="font-semibold">Region:</span> {region}
					</div>
					<div>
						<span className="font-semibold">Capital:</span>{" "}
						{capital}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardCountry;

import React from "react";
import { FaSearch } from "react-icons/fa";

function InputSearch({ search, setSearch }) {
	return (
		<div className="relative shadow rounded-md">
			<div className="absolute top-[20px] left-[33px] text-gray-300">
				<FaSearch />
			</div>
			<input
				type="text"
				name="search"
				id="search"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
				placeholder="Search for a country..."
				className="w-full p-4 pl-20 text-sm bg-primary"
			/>
		</div>
	);
}

export default InputSearch;

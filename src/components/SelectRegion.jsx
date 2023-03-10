import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function SelectRegion() {
	const [show, setShow] = useState(false);

	console.log(show);

	return (
		<div className="relative mt-12">
			<div
				className=" bg-primary shadow px-6 py-4 font-semibold rounded w-[220px] items-center flex justify-between cursor-pointer"
				onClick={() => setShow(!show)}
			>
				<div className=" select-none ">Filter by Region</div>
				<GoChevronDown />
			</div>
			<ul
				className={`[&>*]:cursor-pointer absolute top-[60px] p-4 bg-primary font-semibold shadow w-[220px] rounded space-y-2 ${
					show ? "block" : "hidden"
				}`}
			>
				<li>Africa</li>
				<li>America</li>
				<li>Asia</li>
				<li>Europe</li>
				<li>Oceania</li>
			</ul>
		</div>
	);
}

export default SelectRegion;

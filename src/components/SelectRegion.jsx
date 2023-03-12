import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function SelectRegion({ setRegion }) {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("Filter by Region");

	return (
		<div className="relative mt-12 z-50">
			<div
				className=" bg-primary shadow px-6 py-4 font-semibold rounded w-[220px] items-center flex justify-between cursor-pointer"
				onClick={() => setShow(!show)}
			>
				<div className=" select-none ">{title}</div>
				<GoChevronDown />
			</div>
			<ul
				className={`[&>*]:cursor-pointer absolute top-[60px] p-4 bg-primary font-semibold shadow w-[220px] rounded space-y-2 ${
					show ? "block" : "hidden"
				}`}
			>
				<li
					onClick={() => {
						setShow(false);
						setTitle("Africa");
						setRegion("africa");
					}}
				>
					Africa
				</li>
				<li
					onClick={() => {
						setShow(false);
						setTitle("America");
						setRegion("americas");
					}}
				>
					America
				</li>
				<li
					onClick={() => {
						setShow(false);
						setTitle("Asia");
						setRegion("asia");
					}}
				>
					Asia
				</li>
				<li
					onClick={() => {
						setShow(false);
						setTitle("Europe");
						setRegion("europe");
					}}
				>
					Europe
				</li>
				<li
					onClick={() => {
						setShow(false);
						setTitle("Oceania");
						setRegion("oceania");
					}}
				>
					Oceania
				</li>
			</ul>
		</div>
	);
}

export default SelectRegion;

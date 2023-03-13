import React from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header({ isDarkTheme, setIsDarkTheme }) {
	return (
		<div className="h-[10vh] bg-primary flex justify-between items-center px-4 md:px-16">
			<Link to={"/"} className="font-bold md:text-xl">
				Where in the world?
			</Link>
			<button
				className="flex gap-4 items-center"
				data-toggle-theme="myDark,myLight"
				data-act-class="ACTIVECLASS"
				onClick={() => setIsDarkTheme(!isDarkTheme)}
			>
				<div>
					{isDarkTheme === false ? (
						<HiOutlineMoon size={20} />
					) : (
						<HiMoon size={20} />
					)}
				</div>
				<div className="font-semibold">Dark Mode</div>
			</button>
		</div>
	);
}

export default Header;

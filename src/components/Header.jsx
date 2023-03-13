import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { themeChange } from "theme-change";

function Header() {
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		return localStorage.getItem("theme") === "myDark" ? true : false;
	});

	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project

		console.log(isDarkTheme);
	}, []);

	return (
		<div className="h-[10vh] bg-primary flex justify-between items-center px-4 md:px-16">
			<div className="font-bold md:text-xl">Where in the world?</div>
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

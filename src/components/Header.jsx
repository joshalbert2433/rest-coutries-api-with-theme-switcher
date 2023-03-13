import React from "react";
import { FiMoon } from "react-icons/fi";

function Header() {
	return (
		<div className="h-[10vh] bg-primary flex justify-between items-center px-4 md:px-16">
			<div className="font-bold md:text-xl">Where in the world?</div>
			<div className="flex gap-4 items-center">
				<div>
					<FiMoon size={20} />
				</div>
				<div className="font-semibold">Dark Mode</div>
			</div>
		</div>
	);
}

export default Header;

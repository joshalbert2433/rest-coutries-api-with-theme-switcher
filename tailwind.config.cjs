/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},

	daisyui: {
		themes: [
			{
				myLight: {
					primary: "hsl(0, 0%, 100%)",
					"base-100": "hsl(0, 0%, 98%)",
				},
				myDark: {
					primary: "hsl(209, 23%, 22%)",
					"base-100": "hsl(207, 26%, 17%)",
					"--primary-content": "hsl(0, 0%, 100%)",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};

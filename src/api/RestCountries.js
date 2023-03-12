import Axios from "axios";

const RestCountries = Axios.create({
	baseURL: "https://restcountries.com/v2",
	validateStatus: (status) => {
		// THROW ERROR
		return status >= 200 && status < 300;
	},
});

const getCountriesByRegion = async (region, search) => {
	let URI =
		search !== ""
			? `/name/${search}`
			: region === "all"
			? "/all"
			: `/region/${region}`;

	// if (search !== "") {
	// 	URI = `/name/${search}`;
	// }

	console.log(URI);

	try {
		const { data } = await RestCountries.get(URI);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const getCountriesByName = async (keyword) => {
	try {
		const { data } = await RestCountries.get(`/name/${keyword}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getCountriesByRegion, getCountriesByName };

import Axios from "axios";

const RestCountries = Axios.create({
	baseURL: "https://restcountries.com/v2",
	// validateStatus: (status) => {
	// 	// THROW ERROR
	// 	return status >= 200 && status < 300;
	// },
});

const getCountriesByRegion = async (region) => {
	let URI = region === "all" ? "/all" : `/region/${region}`;

	try {
		const { data } = await RestCountries.get(URI);
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

const getCountryCode = async (code) => {
	try {
		const { data } = await RestCountries.get(`/alpha?codes=${code}`);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error.response);
	}
};

export { getCountriesByRegion, getCountriesByName, getCountryCode };

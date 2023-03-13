import Axios from "axios";

const RestCountries = Axios.create({
	baseURL: "https://restcountries.com/v2",
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
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getCountriesByRegion, getCountriesByName, getCountryCode };

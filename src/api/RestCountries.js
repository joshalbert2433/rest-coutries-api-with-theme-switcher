import Axios from "axios";

const RestCountries = Axios.create({
	baseURL: "https://restcountries.com/v2/",
});

const getAllCountries = async () => {
	try {
		const { data } = await RestCountries.get("all");

		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getAllCountries };

export const fetchTime = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data));
		//.catch((error) => reject(new error(error)));
	});
};

export const getByIp = () => {
	const urlAPI = "https://ipapi.co/json/";
	//const urlAPI = "https://api.github.com/users/timmywheels";
	return fetchTime(urlAPI);
};

export const detectLocation = () => {
	return new Promise((resolve, reject) => {
		resolve(getByIp());
		reject(null);
	});
};

export default detectLocation;

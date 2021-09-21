export const byParser = () => {
	const parser = new UAParser().getOS();
	return parser;
};

export const detectOS = () => {
	return new Promise((resolve, reject) => {
		resolve(byParser());
		reject(null);
	});
};

export default detectOS;

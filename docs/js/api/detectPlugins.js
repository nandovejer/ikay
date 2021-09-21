const allPlugins = () => {
	if (
		navigator.plugins !== undefined &&
		navigator.plugins !== null &&
		navigator.plugins.length > 0
	) {
		let result = [];
		navigator.plugins.forEach((element) => {
			result.push(element.name);
		});
		return result;
	}
};

export const detectPlugins = () => {
	return new Promise((resolve, reject) => {
		resolve(allPlugins());
		reject(null);
	});
};

export default detectPlugins;

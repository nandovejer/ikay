const allPlugins = () => {
	if (
		navigator.plugins !== undefined &&
		navigator.plugins !== null &&
		navigator.plugins.length > 0
	) {
		let result = [];
		const plugins = navigator.plugins;
		for (let i = 0; i < plugins.length; i++) {
			result.push(plugins[i].name);
		}
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

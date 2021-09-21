/**
 * Detect CPU by Web API
 * @param {object}
 * @returns {object}
 */
const byNavigator = () => {
	return {
		cores: navigator.hardwareConcurrency
			? navigator.hardwareConcurrency
			: null,
		platform: navigator.platform !== undefined ? navigator.platform : null,
	};
};

const detectCPU = () => {
	return new Promise((resolve, reject) => {
		resolve(byNavigator());
	});
};

export default detectCPU;

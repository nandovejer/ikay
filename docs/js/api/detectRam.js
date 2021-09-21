/**
 * Ram Api
 * This function return a promise
 * @returns Number of ram in GB in your device.
 */
const detectRam = () => {
	return new Promise((resolve, reject) => {
		resolve(
			navigator.deviceMemory !== undefined ? navigator.deviceMemory : null
		);
		reject(null);
	});
};

export default detectRam;

// This function return a promise

// const detectRam = () =>  navigator.deviceMemory !== undefined ? navigator.deviceMemory : null;
const detectTestTime = () => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1500, "detectTestTime 12500 ms");
		reject(null);
	});
};

export default detectTestTime;

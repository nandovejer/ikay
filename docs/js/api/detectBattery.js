/**
 * Battery Api
 * This function return a promise
 * @returns a objet with:
 * 		charging: true || false.
 * 		dischargingHours: Number of hours.
 * 		chargingHours: Number of hours.
 * 		percentCharged: Number of percent.
 */
const detectBattery = () => {
	const dischargingTime = (data) => {
		return !data.charging && data.dischargingTime === Infinity
			? Infinity
			: Math.round((100 * data.dischargingTime) / 3600) / 100;
	};

	const chargingTime = (data) => {
		return !data.charging && data.chargingTime === Infinity
			? Infinity
			: Math.round((100 * data.chargingTime) / 3600) / 100;
	};

	const percentCharged = (data) => {
		return data.level * 100;
	};

	const callback = (data) => {
		return {
			charging: data.charging,
			dischargingHours: dischargingTime(data),
			chargingHours: chargingTime(data),
			percentCharged: percentCharged(data),
		};
	};
	const battery = navigator.getBattery().then((data) => callback(data));
	return navigator.getBattery() !== null ? battery : null;
};

export default detectBattery;

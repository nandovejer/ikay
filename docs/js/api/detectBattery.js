/**
 * Battery Api
 * This function return a promise
 * @returns a objet with:
 * 		charging: true || false.
 * 		dischargingHours: Number of hours.
 * 		chargingHours: Number of hours.
 * 		percentCharged: Number of percent.
 */
export const detectBattery = () => {
	const callback = (data) => {
		return {
			charging: data.charging,
			dischargingHours: dischargingTime(data),
			chargingHours: chargingTime(data),
			percentCharged: percentCharged(data),
		};
	};

	if (navigator.getBattery !== undefined) {
		const battery = navigator.getBattery().then((data) => callback(data));
		return navigator.getBattery() !== null ? battery : null;
	} else {
		return null;
	}
};

export const dischargingTime = (data) =>
	!data.charging && data.dischargingTime === Infinity
		? Infinity
		: Math.round((100 * data.dischargingTime) / 3600) / 100;

export const chargingTime = (data) =>
	!data.charging && data.chargingTime === Infinity
		? Infinity
		: Math.round((100 * data.chargingTime) / 3600) / 100;

export const percentCharged = (data) => Math.round(data.level * 100);

export const eventBattery = (opt) => {
	if (navigator.getBattery !== undefined) {
		opt = opt || {
			chargingStatus: null,
			percentCharged: null,
			chargingHours: null,
			dischargingHours: null,
		};

		navigator.getBattery().then((battery) => {
			battery.onchargingchange = () =>
				opt.chargingStatus(battery.charging);

			battery.onlevelchange = () =>
				opt.percentCharged(percentCharged(battery));

			battery.ondischargingtimechange = () =>
				opt.chargingHours(chargingTime(battery));
				
			battery.chargingtimechange = () =>
				opt.dischargingHours(dischargingTime(battery));
		});
	}
};

export default detectBattery;

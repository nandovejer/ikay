// VANILLA JS
import detectRam from "./api/detectRam.js";
import detectBattery from "./api/detectBattery.js";
import detectTestTime from "./api/detectTestTime.js";

function getApis() {
	const noSupport = "noSupport";
	const allValuesDetected = [detectRam(), detectBattery(), detectTestTime()];
	Promise.all(allValuesDetected).then((values) => {
		let fingerprint = {
			ram: values[0] || noSupport,
			battery: values[1] || noSupport,
			testTime: values[2] || noSupport,
		};
		console.table(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

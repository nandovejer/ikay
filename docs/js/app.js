// VANILLA JS
import detectRam from "./api/detectRam.js";
import detectBattery from "./api/detectBattery.js";
import detectGPU from "./api/detectGPU.js";

function getApis() {
	const noSupport = "noSupport";
	const allThePromisesWeMade = [detectRam(), detectBattery(), detectGPU()];
	Promise.all(allThePromisesWeMade).then((values) => {
		let fingerprint = {
			ram: values[0] || noSupport,
			battery: values[1] || noSupport,
			gpu: values[2] || noSupport,
		};
		console.table(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

// APIS:
// By External Library

// By Web
import detectRam from "./api/detectRam.js";
import detectBattery from "./api/detectBattery.js";
import detectGPU from "./api/detectGPU.js";
import detectCPU from "./api/detectCPU.js";

function getApis() {
	const noSupport = "noSupport";
	const allThePromisesWeMade = [
		detectRam(),
		detectBattery(),
		detectGPU(),
		detectCPU(),
	];
	Promise.all(allThePromisesWeMade).then((values) => {
		let fingerprint = {
			lang: navigator.language,
			ram: values[0] || noSupport,
			battery: values[1] || noSupport,
			gpu: values[2] || noSupport,
			cpu: values[3] || noSupport,
		};
		console.table(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

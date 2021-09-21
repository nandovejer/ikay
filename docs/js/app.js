// APIS:
// By External Library

// By Web
import detectRam from "./api/detectRam.js";
import detectBattery from "./api/detectBattery.js";
import detectGPU from "./api/detectGPU.js";
import detectCPU from "./api/detectCPU.js";
import detectBrowser from "./api/detectBrowser.js";
import detectDevice from "./api/detectDevice.js";
import detectTouchDevice from "./api/detectTouchDevice.js";
import detectOrientation from "./api/detectOrientation.js";

function getApis() {
	const noSupport = null;
	const allThePromisesWeMade = [
		detectRam(),
		detectBattery(),
		detectGPU(),
		detectCPU(),
		detectBrowser(),
		detectDevice(),
		detectTouchDevice(),
		detectOrientation(),
	];
	Promise.all(allThePromisesWeMade).then((values) => {
		let fingerprint = {
			darkmode: window.matchMedia("(prefers-color-scheme: dark)").matches,
			lang: navigator.language,
			ram: values[0] || noSupport,
			battery: values[1] || noSupport,
			gpu: values[2] || noSupport,
			cpu: values[3] || noSupport,
			browser: values[4] || noSupport,
			device: values[5] || noSupport,
			touch: typeof values[6] === "boolean" ? values[6] : noSupport,
			orientation: values[7] || noSupport,
		};

		window.your = fingerprint;
		console.table(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

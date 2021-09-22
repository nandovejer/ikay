// APIS:

// By Library Parser
import detectOS from "./api/detectOS.js";
import detectDevice from "./api/detectDevice.js";
import detectBrowser from "./api/detectBrowser.js";

// By Web
import detectRam from "./api/detectRam.js";
import detectBattery from "./api/detectBattery.js";
import detectGPU from "./api/detectGPU.js";
import detectCPU from "./api/detectCPU.js";
import detectTouchDevice from "./api/detectTouchDevice.js";
import detectOrientation from "./api/detectOrientation.js";
import detectPlugins from "./api/detectPlugins.js";
import detectSpeed from "./api/detectSpeed.js";
import detectDate from "./api/detectDate.js";

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
		detectOS(),
		detectPlugins(),
		detectSpeed(),
		detectDate(),
	];
	Promise.all(allThePromisesWeMade).then((values) => {
		let fingerprint = {
			screen: {
				px: `${screen.width}x${screen.height}`,
				bitsPixel: window.screen.colorDepth,
			},
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
			os: values[8] || noSupport,
			plugins: values[9] || noSupport,
			speed: values[10] || noSupport,
			date: values[11] || noSupport,
		};

		window.your = fingerprint;
		console.table(fingerprint.date);
		console.log(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

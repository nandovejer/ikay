/**
 * ALL APIs
 */

// By external service https://ipapi.co
import detectLocation from "../api/detectLocation.js";

// By Library Parser
import detectOS from "../api/detectOS.js";
import detectDevice from "../api/detectDevice.js";
import detectBrowser from "../api/detectBrowser.js";

// By Web
import detectRam from "../api/detectRam.js";
import detectBattery from "../api/detectBattery.js";
import detectGPU from "../api/detectGPU.js";
import detectCPU from "../api/detectCPU.js";
import detectTouchDevice from "../api/detectTouchDevice.js";
import detectOrientation from "../api/detectOrientation.js";
import detectPlugins from "../api/detectPlugins.js";
import detectSpeed from "../api/detectSpeed.js";
import detectDate from "../api/detectDate.js";
import detectLogged from "../api/detectLogged.js";

import { setWindowBattery } from "../api/detectBattery.js";
import detectGyroscope from "../api/detectGyroscope.js";

export const getAPIs = (callback) => {
	const notSupportValuePolicy = (value) =>
		value !== undefined && value !== null ? value : null;

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
		detectLocation(),
		detectLogged(),
	];
	Promise.all(allThePromisesWeMade).then((values) => {
		let fingerprint = {
			compass: {},
			battery: null,
			previousPage: document.referrer,
			screen: {
				px: `${screen.width}x${screen.height}`,
				bitsPixel: window.screen.colorDepth,
			},
			darkmode: window.matchMedia("(prefers-color-scheme: dark)").matches,
			lang: navigator.language,
			ram: notSupportValuePolicy(values[0]),
			battery: notSupportValuePolicy(values[1]),
			gpu: notSupportValuePolicy(values[2]),
			cpu: notSupportValuePolicy(values[3]),
			browser: notSupportValuePolicy(values[4]),
			device: notSupportValuePolicy(values[5]),
			touch: typeof values[6] === "boolean" ? values[6] : null,
			orientation: notSupportValuePolicy(values[7]),
			os: notSupportValuePolicy(values[8]),
			plugins: notSupportValuePolicy(values[9]),
			speed: notSupportValuePolicy(values[10]),
			date: notSupportValuePolicy(values[11]),
			location: notSupportValuePolicy(values[12]),
			logged: notSupportValuePolicy(values[13]),
		};

		window.your = fingerprint;
		//detectGyroscope();
		setWindowBattery();
		console.log("fingerprint: ", fingerprint);
		console.log("detectGyroscope: ", window.your.compass);
		callback();
		//////
	});
};

export default getAPIs;

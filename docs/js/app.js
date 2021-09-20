// VANILLA JS
import detectRam from "./api/detectRam.js";
import detectTestTime from "./api/detectTestTime.js";

function getApis() {
	const noSupport = "noSupport";
	const allValuesDetected = [detectRam(), detectTestTime()];
	Promise.all(allValuesDetected).then((values) => {
		let fingerprint = {
			ram: values[0] || noSupport,
			testTime: values[1] || noSupport,
		};
		console.log(fingerprint);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getApis();
});

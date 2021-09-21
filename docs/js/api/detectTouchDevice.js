/**
 * Detect Touch Device
 * This function return a promise
 * @returns {Promise}
 */

const isTouch = () => {
	const touchEventConditions =
		"ontouchstart" in window ||
		(window.DocumentTouch && document instanceof DocumentTouch);
	const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-", ""];
	const q = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
	return touchEventConditions === true ? true : window.matchMedia(q).matches;
};

const detectTouchDevice = () => {
	return new Promise((resolve, reject) => {
		resolve(isTouch());
		reject(null);
	});
};

export default detectTouchDevice;

import { isTouch } from "../api/detectTouchDevice.js";

export const detect = () => {
	const _isTouch = isTouch();
	let isPortrait =
		window.matchMedia("screen and (orientation: portrait)").matches &&
		_isTouch;
	let isLandscape =
		window.matchMedia("screen and (orientation: landscape)").matches &&
		_isTouch;
	if (isPortrait) {
		return "portrait";
	} else if (isLandscape) {
		return "landscape";
	} else if (!isPortrait && !isLandscape) {
		return "noRevolving";
	} else {
		return null;
	}
};
export const detectOrientation = () => {
	return new Promise((resolve, reject) => {
		resolve(detect());
		reject(null);
	});
};

export default detectOrientation;

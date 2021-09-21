import { isTouch } from "../api/detectTouchDevice.js";

export const detect = () => {
	const _isTouch = isTouch();
	let isPortrait =
		window.matchMedia("screen and (orientation: portrait)").matches &&
		_isTouch;
	let isLandscape =
		window.matchMedia("screen and (orientation: landscape)").matches &&
		_isTouch;

	switch (true) {
		case isPortrait:
			return "portrait";
			break;
		case isLandscape:
			return "landscape";
			break;
		case !isPortrait && !isLandscape:
			return "noRevolving";
			break;
		default:
			return null;
			break;
	}
};
export const detectOrientation = () => {
	return new Promise((resolve, reject) => {
		resolve(detect());
		reject(null);
	});
};

export default detectOrientation;

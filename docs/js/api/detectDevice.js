/**
 * Detect Device by user agent
 * This function return a promise
 * @returns {promise} mobileAndroid || tabletAndroid || ipad || iphone || laptopWin || laptopMac || tv || unknownDevice
 */

import { isTouch } from "../api/detectTouchDevice.js";

const byUserAgent = () => {
	let device;
	let _isTouch = isTouch();
	const userAgent = navigator.userAgent.toLocaleLowerCase();
	const os = navigator.platform.toLocaleLowerCase();
	const isAndroid = userAgent.indexOf("android") !== -1;
	const isMobile = userAgent.indexOf("mobile") !== -1;
	switch (true) {
		case isAndroid && isMobile && _isTouch:
			device = "mobileAndroid";
			break;
		case isAndroid && !isMobile && _isTouch:
			device = "tabletAndroid";
			break;
		case userAgent.indexOf("ipad") !== -1:
			device = "ipad";
			break;
		case userAgent.indexOf("iphone") !== -1:
			device = "iphone";
			break;
		case os.indexOf("win") !== -1 && !_isTouch:
			device = "laptopWin";
			break;
		case os.indexOf("mac") !== -1 && !_isTouch:
			device = "laptopMac";
			break;
		case os.indexOf("tv") !== -1:
			device = "tv";
			break;
		default:
			device = "unknownDevice";
			console.log(os.indexOf("mac") !== -1 && !isTouch);
			break;
	}
	return device;
};
const detectDevice = () => {
	return new Promise((resolve, reject) => {
		resolve(byUserAgent());
		reject(null);
	});
};

export default detectDevice;

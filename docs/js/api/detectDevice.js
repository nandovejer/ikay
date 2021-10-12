/**
 * Detect Device by user agent
 * This function return a promise
 * @returns {promise} mobileAndroid || tabletAndroid || ipad || iphone || laptopWin || laptopMac || tv || unknownDevice
 */

import { isTouch } from "../api/detectTouchDevice.js";

export const byParser = () => {
	const parser = new UAParser().getDevice();
	return parser;
};

export const translate = {
	mobileAndroid: "a Mobile Android",
	tabletAndroid: "a tablet Android",
	ipad: "a Ipad",
	iphone: "a Iphone",
	laptopWin: "a Windows laptop/Desktop",
	laptopMac: "a Mac laptop/Desktop",
	tv: "a Television",
	unknownDevice: "a unknown Device",
};

export const byUserAgent = () => {
	let device;
	let _isTouch = isTouch();
	const userAgent = navigator.userAgent.toLocaleLowerCase();
	const os = navigator.platform ? navigator.platform.toLocaleLowerCase() : null;
	const isAndroid = userAgent.indexOf("android") !== -1;
	const isMobile = userAgent.indexOf("mobile") !== -1;
	switch (true) {
		case isAndroid && isMobile && _isTouch:
			device = translate.mobileAndroid;
			break;
		case isAndroid && !isMobile && _isTouch:
			device = translate.tabletAndroid;
			break;
		case userAgent.indexOf("ipad") !== -1:
			device = translate.ipad;
			break;
		case userAgent.indexOf("iphone") !== -1:
			device = translate.iphone;
			break;
		case os.indexOf("win") !== -1 && !_isTouch:
			device = translate.laptopWin;
			break;
		case os.indexOf("mac") !== -1 && !_isTouch:
			device = translate.laptopMac;
			break;
		case os.indexOf("tv") !== -1:
			device = translate.tv;
			break;
		default:
			device = translate.unknownDevice;
			console.log(os.indexOf("mac") !== -1 && !isTouch);
			break;
	}
	return device;
};
export const detectDevice = () => {
	return new Promise((resolve, reject) => {
		resolve({
			default: byUserAgent(),
			library: byParser(),
		});
		reject(null);
	});
};

export default detectDevice;

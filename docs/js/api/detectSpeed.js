/**
 * Detect internet speed  native
 * Native detect speeed (Don't work IE, Firefox, Safari)
 * https://developer.mozilla.org/en-US/docs/Glossary/Effective_connection_type
 * @return {string} // slow-2g (2000ms-50Kbps) || 2g	(1400ms-70Kbps) || 3g	(270ms-700Kbps) || 4g	(0ms	∞)
 */
export const speedNative = () => {
	if (navigator.connection !== undefined) {
		return navigator.connection.effectiveType.toLocaleLowerCase();
	} else {
		return null;
	}
};

/**
 * Detect internet speed
 * @returns
 */
export const detectSpeed = () => {
	return new Promise((resolve, reject) => {
		resolve(speedNative());
		reject(null);
	});
};

export default detectSpeed;

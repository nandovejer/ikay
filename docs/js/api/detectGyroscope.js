const updateObj = (gyroscope) => {
	window.your.compass = gyroscope;
	document.querySelector(".js-gyroscope").innerHTML = `
		<li>hasCompass: ${window.your.compass.hasCompass}</li>
		<li>orientation: ${window.your.compass.orientation}</li>
		<li>alpha: ${window.your.compass.alpha}</li>
		<li>beta: ${window.your.compass.beta}</li>
		<li>gamma: ${window.your.compass.gamma}</li>
		<li>inYourHands: ${window.your.compass.inYourHands}</li>
	`;
};
const deviceorientation = () => {
	window.addEventListener("deviceorientation", function (event) {
		let absolute = event.absolute;
		let alpha = event.alpha;
		let beta = event.beta;
		let gamma = event.gamma;

		let gyroscope = {
			hasCompass: false,
			orientation: null,
			alpha: null,
			beta: null,
			gamma: null,
			inYourHands: null,
		};

		gyroscope.hasCompass = alpha ? true : false;

		if (gyroscope.hasCompass) {
			gyroscope.orientation = absolute;
			gyroscope.alpha = alpha;
			gyroscope.beta = beta;
			gyroscope.gamma = gamma;
			gyroscope.inYourHands = !(Math.abs(beta) + Math.abs(gamma) < 1.8);
			updateObj(gyroscope);
		} else {
			updateObj(gyroscope);
		}
	});
};

const detectGyroscope = () => {
	window.DeviceOrientationEvent
		? deviceorientation()
		: console.error("event deviceOrientation fail");
};

export default detectGyroscope;

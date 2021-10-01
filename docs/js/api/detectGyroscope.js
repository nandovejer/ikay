export const getDevicemotion = (event) => {
	let aXCurrent = event.accelerationIncludingGravity.x;
	let data = {
		aY: Math.round(event.accelerationIncludingGravity.y) || null, // Result is -10 to 10
		aZ: Math.round(event.accelerationIncludingGravity.z) || null, // Result is -10 to 10
		aX: Math.round(event.accelerationIncludingGravity.x) || null, // Result is -10 to 10
	};
	gyroCallback(data);
};

export const getDeviceorientation = (event) => {
	data = {
		orientation: event.absolute || null,
		alpha: Math.round(event.alpha) || null,
		beta: Math.round(event.beta) || null,
		gamma: Math.round(event.gamma) || null,
		inYourHands: !(Math.abs(event.beta) + Math.abs(event.gamma) < 1.8),
	};
	gyroCallback(data);
};

export const gameSquare = {
	renderInfoList: () => {
		const renderGyroValues = (selector, value) => {
			if (value !== undefined && value !== null) {
				selector.innerHTML = value;
			}
		};
		const scope = document.querySelector(".js-gyro");
		renderGyroValues(scope.querySelector(".js-gyroY"), gyro.aY);
		renderGyroValues(scope.querySelector(".js-gyroZ"), gyro.aZ);
		renderGyroValues(scope.querySelector(".js-gyroX"), gyro.aX);
		renderGyroValues(
			scope.querySelector(".js-gyroOrientation"),
			gyro.orientation
		);
		renderGyroValues(scope.querySelector(".js-gyroAlpha"), gyro.alpha);
		renderGyroValues(scope.querySelector(".js-gyroBeta"), gyro.beta);
		renderGyroValues(scope.querySelector(".js-gyroGamma"), gyro.gamma);
		renderGyroValues(
			scope.querySelector(".js-gyroInYourHands"),
			gyro.inYourHands
		);
	},
	updateBall: () => {
		const boxWidth = document.querySelector(".js-box").offsetWidth;
		const boxHeight = document.querySelector(".js-box").offsetHeight;
		const ballSize = document.querySelector(".js-ball").offsetWidth;

		let alpha = gyro.alpha;
		let beta = gyro.beta;
		let gamma = gyro.gamma;
		let x = (gyro.aX * boxWidth - ballSize) / 10;
		let y = (gyro.aY * boxHeight - ballSize) / 10;
		let z = gyro.aZ * 10;

		document.querySelector(".js-ball").style.transform = `
      perspective(100vw) translate3d( ${x}px, ${y}px, ${z}px)
    `;
	},
};

export const setWindowYourCompass = (obj) => {
	window.your.compass = obj;
	console.log("window.your.compass: ", window.your.compass);
};

// callback from Events Listeners
export const gyroCallback = (gyro) => {
	setWindowYourCompass(gyro);
	// ...Add more here.
};

// Events Init
export const detectGyroscope = () => {
	if (
		window.DeviceMotionEvent !== undefined &&
		window.DeviceMotionEvent !== null
	) {
		window.addEventListener("devicemotion", getDevicemotion, true);
	}
	if (
		window.DeviceOrientationEvent !== undefined &&
		window.DeviceOrientationEvent !== null
	) {
		window.addEventListener(
			"deviceorientation",
			getDeviceorientation,
			true
		);
	}
};

export default detectGyroscope;

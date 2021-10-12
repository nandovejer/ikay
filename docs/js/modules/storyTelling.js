import urlMap from "./maps.js";
import { eventBattery } from "../api/detectBattery.js";

export const storyTelling = (data) => {
	const scope = document.querySelector(".js-storyTelling");
	const youAreNow = scope.querySelector(".js-youAreNow");
	const youAreHere = scope.querySelector(".js-youAreHere");
	const youAreUsing = scope.querySelector(".js-youAreUsing");
	const youBrowser = scope.querySelector(".js-youBrowser");
	const youBattery = scope.querySelector(".js-youBattery");
	const youGyroscope = scope.querySelector(".js-youGyroscope");
	const noSupport = `<span title="Good Luck, your browser respect your privacy" class="strikethrough">notFound</span>`;
	// let urlMapGoogle =  window.your.location.latitude ? `https://maps.google.com/maps?q=${window.your.location.latitude},${window.your.location.longitude}` : null;
	let urlMapGoogle = urlMap(
		window.your.location.latitude,
		window.your.location.longitude
	);


	let obj = {
		previousPage: document.referrer || noSupport,
		ip: window.your.location.ip || noSupport,
		country: window.your.location.country_name || noSupport,
		city: window.your.location.city || noSupport,
		date: window.your.date.long || noSupport,
		time: window.your.date.time || noSupport,
		device: (window.your.device.library.model ??=
			window.your.device.default || noSupport),
		deviceBrand: window.your.device.library.vendor || noSupport,
		deviceType: window.your.device.library.type || noSupport,
		ram: window.your.ram || noSupport,
		cores: window.your.cpu.cores || noSupport,
		platform: window.your.cpu.platform || noSupport,
		gpu: window.your.gpu.renderer || noSupport,
		os: window.your.os.name + " " + window.your.os.version || noSupport,
		screen:
			window.your.screen.px +
			"px " +
			window.your.screen.bitsPixel +
			"bitsPixel" || noSupport,
		browserDefault: window.your.browser.default || noSupport,
		browserName:
			window.your.browser.library.name +
			" " +
			window.your.browser.library.version || noSupport,
		darkmode:
			window.your.darkmode == true ? "enabled" : "disabled" || noSupport,
		orientation: window.your.orientation || noSupport,
		plugins: window.your.plugins || noSupport,
		speed: window.your.speed || noSupport,
		telco: window.your.location.org || noSupport,
		battery: {
			charging:
				window.your.battery !== null &&
					window.your.battery.charging === true
					? "charging"
					: window.your.battery !== null &&
						window.your.battery.charging !== null
						? "no charging"
						: noSupport,
			percentCharged:
				window.your.battery !== null &&
					window.your.battery.percentCharged !== null
					? window.your.battery.percentCharged + "%"
					: noSupport,
			chargingHours:
				window.your.battery !== null &&
					window.your.battery.chargingHours !== null
					? window.your.battery.chargingHours + " hours"
					: noSupport,
			dischargingHours:
				window.your.battery !== null &&
					window.your.battery.dischargingHours !== null
					? window.your.battery.dischargingHours + " hours"
					: noSupport,
		},
	};

	const renderDinamicDeviceInYourHands = () => {
		document.querySelector(".js-inYourHands").innerHTML =
			noSupport;
		window.addEventListener(
			"deviceorientation",
			(event) => {
				console.log(event);
				const inYourHands = !(
					Math.abs(event.beta) + Math.abs(event.gamma) <
					1.8
				);
				const msg =
					inYourHands === true
						? " your hands"
						: " a surface like a table";
				document.querySelector(
					".js-inYourHands"
				).innerHTML = msg;
			},
			true
		);
	};

	const renderDinamicBattery = () => {
		eventBattery({
			chargingStatus: (value) => {
				obj.battery.charging =
					value === true ? "charging" : "no charging";
				window.your.battery.charging = value;
				console.log(value);
				document.querySelector(".js-charging").innerHTML =
					obj.battery.charging;
			},
			percentCharged: (value) => {
				obj.battery.percentCharged = value + "%";
				window.your.battery.percentCharged = value;
				document.querySelector(".js-percentCharged").innerHTML =
					obj.battery.percentCharged;
			},
			chargingHours: (value) => {
				obj.battery.chargingHours = value + " Hours";
				window.your.battery.chargingHours = value;
				document.querySelector(".js-chargingHours").innerHTML =
					obj.battery.chargingHours;
			},
			dischargingHours: (value) => {
				obj.battery.dischargingHours = value + " Hours";
				window.your.battery.dischargingHours = value;
				document.querySelector(".js-dischargingHours").innerHTML =
					obj.battery.dischargingHours;
			},
		});
	};

	// Render Time
	youAreNow.innerHTML = `
		Today is <strong title="date">${obj.date}</strong>, and you opened this site at <strong title="time">${obj.time}.</strong>, I know that your ip is <strong title="ip">${obj.ip}</strong>, (the IP is like the phone number of your internet's connection) and you come from the page <strong title="Previous Page">${obj.previousPage}</strong>.
	`;

	youAreHere.innerHTML = `
	Now, you are in the country <strong title="country">${obj.country}</strong>, close to the city <strong title="city">${obj.city}</strong>, here in this <a href="${urlMapGoogle}">map</a> more or less.
	`;

	youAreUsing.innerHTML = `You are using a device <strong title="device name">${obj.device}</strong>, with the brand <strong title="brand name">${obj.deviceBrand}</strong>, it is a type of <strong title="type name">${obj.deviceType}</strong>.	I can give you technical information about the device such as the quantity of memory ram <strong title="ram number">${obj.ram}GB</strong>, the CPU <strong title="cpu cores">${obj.cores} cores</strong>  <strong title="cpu platform">${obj.platform}</strong> and complex information like <strong title="gpu name">${obj.gpu}</strong>, the GPU (graphic card) used in your <strong title="device name">${obj.device}</strong>. <br> Don't be scare, but I know that your Operative System is <strong title="OS name and version">${obj.os}</strong> and the resolution of your screen is <strong title="screen resolution and color">${obj.screen}</strong>.
	`;

	youBrowser.innerHTML = `
	 Your are using <strong title="browser Default">${obj.browserDefault}</strong>, specifically <strong title="browser name">${obj.browserName}</strong>. I see that you have de <strong title="dark mode">Dark Mode ${obj.darkmode}</strong>. The orientation of the <strong title="device name">${obj.device}</strong> is <strong title="orientation">${obj.orientation}</strong> with this list of plugins installed in your browser:  <strong title="plugins names">${obj.plugins}</strong>. A connection speed of <strong title="speed">${obj.speed}</strong> and your internet provider company is <strong title="telco">${obj.telco}</strong>.
	`;

	youBattery.innerHTML = `The battery of your device is <strong class ="js-charging" title="status battery">${obj.battery.charging}</strong> with a level of <strong class ="js-percentCharged" title="percent battery">${obj.battery.percentCharged}</strong>, may be the charging time is <strong class ="js-chargingHours" title="charging Time battery">${obj.battery.chargingHours}</strong> and the discharging Time <strong class ="js-dischargingTime" title="discharging Time battery">${obj.battery.dischargingHours}</strong>.`;

	renderDinamicBattery();

	youGyroscope.innerHTML = `Almost all mobile devices like yours have sensors called gyros. For example, these can be used to make your compass application work and can also be used to know if you have the device <strong class ="js-inYourHands" title="Your device is or not in your hands"></strong>.`;
	renderDinamicDeviceInYourHands();
};

export default storyTelling;

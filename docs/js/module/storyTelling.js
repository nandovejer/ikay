import urlMap from "./maps.js";
import { eventBattery } from "../api/detectBattery.js";
import { tpl_storytelling, noSupport } from "../template/tpl_storytelling.js";

export const storyTelling = () => {
	const scope = document.querySelector(".js-storyTelling");
	const youAreNow = scope.querySelector(".js-storyTelling-main");

	let obj = {
		urlMapGoogle: urlMap(window.your.location.latitude, window.your.location.longitude),
		previousPage: document.referrer || noSupport,
		ip: window.your.location.ip || noSupport,
		country: window.your.location.country_name || noSupport,
		city: window.your.location.city || noSupport,
		date: window.your.date.long || noSupport,
		time: window.your.date.time || noSupport,
		device: (window.your.device.library.model ??= window.your.device.default || noSupport),
		deviceBrand: window.your.device.library.vendor || noSupport,
		deviceType: window.your.device.library.type || noSupport,
		ram: window.your.ram || noSupport,
		cores: window.your.cpu.cores || noSupport,
		platform: window.your.cpu.platform || noSupport,
		gpu: window.your.gpu.renderer || noSupport,
		os: window.your.os.name + " " + window.your.os.version || noSupport,
		screen: window.your.screen.px + "px " + window.your.screen.bitsPixel + "bitsPixel" || noSupport,
		browserDefault: window.your.browser.default || noSupport,
		browserName: window.your.browser.library.name + " " + window.your.browser.library.version || noSupport,
		darkmode: window.your.darkmode == true ? "enabled" : "disabled" || noSupport,
		orientation: window.your.orientation || noSupport,
		plugins: window.your.plugins || noSupport,
		speed: window.your.speed || noSupport,
		telco: window.your.location.org || noSupport,
		battery: {
			charging: window.your.battery !== null && window.your.battery.charging === true ? "charging" : window.your.battery !== null && window.your.battery.charging !== null ? "no charging" : noSupport,
			percentCharged: window.your.battery !== null && window.your.battery.percentCharged !== null ? window.your.battery.percentCharged + "%" : noSupport,
			chargingHours: window.your.battery !== null && window.your.battery.chargingHours !== null ? window.your.battery.chargingHours + " hours" : noSupport,
			dischargingHours: window.your.battery !== null && window.your.battery.dischargingHours !== null ? window.your.battery.dischargingHours + " hours" : noSupport,
		},
	};

	const renderDinamicDeviceInYourHands = () => {
		document.querySelector(".js-inYourHands").innerHTML = noSupport;
		window.addEventListener(
			"deviceorientation",
			(event) => {
				console.log(event);
				const inYourHands = !(Math.abs(event.beta) + Math.abs(event.gamma) < 1.8);
				const msg = inYourHands === true ? " your hands" : " a surface like a table";
				document.querySelector(".js-inYourHands").innerHTML = msg;
			},
			true
		);
	};

	const renderDinamicBattery = () => {
		const domCharging = document.querySelector(".js-charging");
		const domPercentCharged = document.querySelector(".js-percentCharged");
		const domChargingHours = document.querySelector(".js-chargingHours");
		const domDischargingHours = document.querySelector(".js-dischargingHours");

		eventBattery({
			chargingStatus: (value) => {
				obj.battery.charging = value === true ? "charging" : "no charging";
				window.your.battery.charging = value;
				domCharging.innerHTML = obj.battery.charging;
			},
			percentCharged: (value) => {
				obj.battery.percentCharged = value + "%";
				window.your.battery.percentCharged = value;
				domPercentCharged.innerHTML = obj.battery.percentCharged;
			},
			chargingHours: (value) => {
				obj.battery.chargingHours = value + " Hours";
				window.your.battery.chargingHours = value;
				domChargingHours.innerHTML = obj.battery.chargingHours;
			},
			dischargingHours: (value) => {
				obj.battery.dischargingHours = value + " Hours";
				window.your.battery.dischargingHours = value;
				domDischargingHours.innerHTML = obj.battery.dischargingHours;
			},
		});
	};

	// INIT //
	youAreNow.innerHTML = tpl_storytelling("en", obj);
	renderDinamicBattery();
	renderDinamicDeviceInYourHands();
};

export default storyTelling;

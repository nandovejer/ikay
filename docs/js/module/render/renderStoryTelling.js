import { eventBattery } from "../../api/detectBattery.js";
import { tpl_storytelling, translate } from "../../template/tpl_storytelling.js";

export const renderStoryTelling = () => {
	const scope = document.querySelector(".js-storyTelling");
	const title = scope.querySelector(".js-storyTelling-title");
	const youAreNow = scope.querySelector(".js-storyTelling-main");

	const renderDinamicDeviceInYourHands = () => {
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
	title.innerHTML = translate["es"].title;
	youAreNow.innerHTML = tpl_storytelling("es");
	renderDinamicBattery();
	renderDinamicDeviceInYourHands();
};

export default renderStoryTelling;

import { urlMap } from "../module/maps.js";

export const noSupport = `<span title="Good Luck, your browser respect your privacy" class="strikethrough">notFound</span>`;

export const tpl_storytelling = (lang) => {
	console.log(urlMap(window.your.location.latitude, window.your.location.longitude));
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

	switch (true) {
		case lang === "en":
			return `
      <p>Today is <strong title="date">${obj.date}</strong>, and you opened this site at <strong title="time">${obj.time}.</strong>, I know that your ip is <strong title="ip">${obj.ip}</strong>, (the IP is like the phone number of your internet's connection) and you come from the page <strong title="Previous Page">${obj.previousPage}</strong>.</p>
      
      <p>Now, you are in the country <strong title="country">${obj.country}</strong>, close to the city <strong title="city">${obj.city}</strong>, here in this <a href="${obj.urlMapGoogle}">map</a> more or less.</p>
      
      <p>You are using a device <strong title="device name">${obj.device}</strong>, with the brand <strong title="brand name">${obj.deviceBrand}</strong>, it is a type of <strong title="type name">${obj.deviceType}</strong>.	I can give you technical information about the device such as the quantity of memory ram <strong title="ram number">${obj.ram}GB</strong>, the CPU <strong title="cpu cores">${obj.cores} cores</strong>  <strong title="cpu platform">${obj.platform}</strong> and complex information like <strong title="gpu name">${obj.gpu}</strong>, the GPU (graphic card) used in your <strong title="device name">${obj.device}</strong>. <br> Don't be scare, but I know that your Operative System is <strong title="OS name and version">${obj.os}</strong> and the resolution of your screen is <strong title="screen resolution and color">${obj.screen}</strong>.</p>
      
      <p>Your are using <strong title="browser Default">${obj.browserDefault}</strong>, specifically <strong title="browser name">${obj.browserName}</strong>. I see that you have de <strong title="dark mode">Dark Mode ${obj.darkmode}</strong>. The orientation of the <strong title="device name">${obj.device}</strong> is <strong title="orientation">${obj.orientation}</strong> with this list of plugins installed in your browser:  <strong title="plugins names">${obj.plugins}</strong>. A connection speed of <strong title="speed">${obj.speed}</strong> and your internet provider company is <strong title="telco">${obj.telco}</strong>.</p>
      
      <p>The battery of your device is <strong class ="js-charging" title="status battery">${obj.battery.charging}</strong> with a level of <strong class ="js-percentCharged" title="percent battery">${obj.battery.percentCharged}</strong>, may be the charging time is <strong class ="js-chargingHours" title="charging Time battery">${obj.battery.chargingHours}</strong> and the discharging Time <strong class ="js-dischargingTime" title="discharging Time battery">${obj.battery.dischargingHours}</strong>.</p>
      
      <p>Almost all mobile devices like yours have sensors called gyros. For example, these can be used to make your compass application work and can also be used to know if you have the device <strong class ="js-inYourHands" title="Your device is or not in your hands"></strong>.</p>
      `;
			break;
		case lang === "es":
			return `
				<p>Hoy es <strong title="fecha">${obj.date}</strong>, y entraste en esta web a las <strong title="hora">${obj.time}.</strong>, se que tu IP es <strong title="ip">${obj.ip}</strong>, (la IP es como algo así como el número de teléfono de tu internet) y vienes de la página <strong title="Página anterior">${obj.previousPage}</strong>.</p>
				
				<p>Ahora, estás en el país <strong title="país">${obj.country}</strong>, muy cerca de la ciudad <strong title="city">${obj.city}</strong>, concretamente aquí en este <a href="${obj.urlMapGoogle}">mapa</a> más o menos.</p>
				
				<p>Veo que estás usando un dispositivo <strong title="nombre del dispositivo">${obj.device}</strong>, de la marca <strong title="nombre de la marca">${obj.deviceBrand}</strong>, del tipo <strong title="tipo de dispositivo">${obj.deviceType}</strong>. Puedo darte más información técnica sobre el dispositivo como la cantidad de Memoria RAM <strong title="ram">${obj.ram}GB</strong>, la CPU <strong title="cpu cores">${obj.cores} cores</strong>  <strong title="cpu platform">${obj.platform}</strong> e información más compleja como <strong title="gpu nombre">${obj.gpu}</strong>, la GPU (Tarjeta gráfica) usada en tu <strong title="nombre del dispositivo">${obj.device}</strong>. <br> No te asustes, pero se que tu Sistema Operativo es <strong title="OS nombre y version">${obj.os}</strong> y la resolución de tu pantalla es <strong title="resolución y color de la pantalla">${obj.screen}</strong>.</p>
				
				<p>Tu navegador es <strong title="navegador">${obj.browserDefault}</strong>, concretamente <strong title="navegador nombre completo">${obj.browserName}</strong>. Parece que tienes el modo oscuro <strong title="modo oscuro">${obj.darkmode}</strong>. La orientación de <strong title="dispositivo">${obj.device}</strong> es <strong title="orientation">${obj.orientation}</strong> con la lista de plugins instaladas en tu navegador:  <strong title="plugins">${obj.plugins}</strong>. Con una conexión tipo <strong title="speed">${obj.speed}</strong> y un proveedor de internet llamada <strong title="telco">${obj.telco}</strong>.</p>
				
				<p>En cuanto a la batería de tu dispositivo está <strong class ="js-charging" title="estado batería">${obj.battery.charging}</strong> a un nivel de <strong class ="js-percentCharged" title="porcentaje batería">${obj.battery.percentCharged}</strong>, puede que el tiempo de carga es <strong class ="js-chargingHours" title="charging Time battery">${obj.battery.chargingHours}</strong> y tiempo de descarga <strong class ="js-dischargingTime" title="discharging Time battery">${obj.battery.dischargingHours}</strong>.</p>
				
				<p>Casi todos los dispositivos móviles como el suyo tienen sensores llamados giroscopios. Por ejemplo, estos se pueden usar para hacer que su aplicación brújula funcione y también se pueden usar para saber si tiene el dispositivo <strong class ="js-inYourHands" title="en tus manos o o no"></strong>.</p>
				`;
			break;
		default:
			break;
	}
};

export default tpl_storytelling;

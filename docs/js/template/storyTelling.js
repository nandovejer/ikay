export const tpl_storytelling = (lang, obj) => {
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
		default:
			break;
	}
};

export default tpl_storytelling;

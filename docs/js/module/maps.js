export const urlMap = (latitude, longitude) =>
	latitude !== null
		? `https://maps.google.com/maps?q=${latitude},${longitude}`
		: null;

/**
 * Create map frame with google maps
 * @param {*} lat
 * @param {*} lon
 * @param {*} mapSelector
 */
export const createMap = (lat, lon, mapSelector) => {
	const mapURL = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed`;
	let tplMap = `<iframe class="card__map" src="${mapURL}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
	mapSelector.innerHTML = tplMap;
};

export const maps = ()=>{};

export default maps;

/**
 * Create map frame with google maps
 * @param {*} lat
 * @param {*} lon
 */
export const createMap = (lat, lon, mapSelector) => {
	const mapURL = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed`;
	const tplMap = `<iframe class="card__map" src="${mapURL}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
	mapSelector.innerHTML = tplMap;
};

export default createMap;

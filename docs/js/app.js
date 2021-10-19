import getApis from "./module/getAPIs.js";
import renderStoryTelling from "./module/render/renderStoryTelling.js";
import renderFooter from "./module/render/renderFooter.js";
import cardMoreInfo from "./complex/card.js";

const renderDomByLang = () => {
	renderStoryTelling();
	renderFooter();
	cardMoreInfo();
};

/**
 * INIT
 */
document.addEventListener("DOMContentLoaded", (event) => {
	// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
	window.your = {};
	getApis(() => {
		renderDomByLang();
	});
});

window.addEventListener("load", (event) => {
	// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
});

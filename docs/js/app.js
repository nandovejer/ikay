import getApis from "./modules/getAPIs.js";
import storyTelling from "./modules/storyTelling.js";

/**
 * INIT
 */
document.addEventListener("DOMContentLoaded", (event) => {
	// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
	window.your = {};
	getApis(() => {
		storyTelling();
	});
});

window.addEventListener("load", (event) => {
	// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
});

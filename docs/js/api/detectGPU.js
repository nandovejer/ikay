/**
 * GPU Detect
 * inspired in the work of https://webkay.robinlinus.com/
 */

const detectGPU = () => {
	let gl;
	let extension;
	let gpuObj = {
		vendor: null,
		renderer: null,
	};

	const prepareCanvas = (canvas) => {
		let selector = document.getElementById("ikaycanvas");
		if (selector === null) {
			document.body.insertAdjacentHTML(
				"beforeend",
				`<canvas id="ikaycanvas" width="1" height="1"></canvas>`
			);
			let canvas = document.querySelector("canvas#ikaycanvas");
			gl = canvas.getContext("experimental-webgl");
			gl.viewportWidth = canvas.width;
			gl.viewportHeight = canvas.height;
		}
	};
	const getInfo = () => {
		if (gl) {
			extension = gl.getExtension("WEBGL_debug_renderer_info");
			if (extension !== undefined) {
				gpuObj.vendor = gl.getParameter(
					extension.UNMASKED_VENDOR_WEBGL
				);
				gpuObj.renderer = gl.getParameter(
					extension.UNMASKED_RENDERER_WEBGL
				);
			} else {
				gpuObj.vendor = gl.getParameter(gl.VENDOR);
				gpuObj.renderer = gl.getParameter(gl.RENDERER);
			}
		}
	};

	try {
		prepareCanvas();
		getInfo();
	} catch (e) {
		return e;
	}

	return new Promise((resolve, reject) => {
		resolve(gpuObj);
		reject(null);
	});
};

export default detectGPU;

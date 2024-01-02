/* 
  GPU Detect
  inpired in the work of https://webkay.robinlinus.com/ 
  */
var detectGPU = {
  init: function () {
    let canvas = document.getElementById("glcanvas");
    let gl,
      extension,
      result = {
        vendor: undefined,
        renderer: undefined,
      };
    try {
      gl = canvas.getContext("experimental-webgl");
      gl.viewportWidth = canvas.width;
      gl.viewportHeight = canvas.height;
    } catch (e) {}
    if (gl) {
      extension = gl.getExtension("WEBGL_debug_renderer_info");
      if (extension !== undefined) {
        result.vendor = gl.getParameter(extension.UNMASKED_VENDOR_WEBGL);
        result.renderer = gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
      } else {
        result.vendor = gl.getParameter(gl.VENDOR);
        result.renderer = gl.getParameter(gl.RENDERER);
      }
    }
    return result.renderer;
  },
};
export default detectGPU;

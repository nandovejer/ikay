//   GPU Detect -   inspired in the work of https://webkay.robinlinus.com/
function ikayGPU() {
  const canvas = document.getElementById("glcanvas");
  let result = {
    vendor: undefined,
    renderer: undefined,
  };

  try {
    const gl = canvas.getContext("experimental-webgl");
    if (!gl) return result.renderer;

    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    const extension = gl.getExtension("WEBGL_debug_renderer_info");
    if (extension) {
      result.vendor = gl.getParameter(extension.UNMASKED_VENDOR_WEBGL);
      result.renderer = gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
    } else {
      result.vendor = gl.getParameter(gl.VENDOR);
      result.renderer = gl.getParameter(gl.RENDERER);
    }
  } catch (e) {
    // Manejo opcional del error, si es necesario
    console.error("Error WebGL: ", e);
  }

  return result;
}

export default ikayGPU;

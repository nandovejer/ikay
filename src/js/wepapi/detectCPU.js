import UAParser from "ua-parser-js";
const detectCPU = {
  init: function () {
    const parser = new UAParser().getCPU();
    const parserCPU =
      parser.architecture !== undefined ? parser.architecture : "";
    let result = `${detectCPU.byNavigator()} ${parserCPU}`;
    return result;
  },
  byUaparser: function (parser) {
    const usaparserDevice = `${parser.type} ${parser.model} by ${parser.vendor}`;
    return usaparserDevice;
  },
  byNavigator: function () {
    const cores = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency + " Cores"
      : "";
    const platform = navigator.platform !== undefined ? navigator.platform : "";
    return `${cores}, ${platform}`;
  },
};

export default detectCPU;

import UAParser from "ua-parser-js";
var detectOs = {
  init: function () {
    const parser = new UAParser().getOS();
    let os = `${parser.name} ${parser.version}`;
    return os;
  },
};

export default detectOs;

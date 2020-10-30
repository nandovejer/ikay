import detectOs from "./detectOs";
import detectBrowser from "./detectBrowser";
import detectDevice from "./detectDevice";
import detectOrientation from "./detectOrientation";
import date from "../modules/date";
import detectSpeedInternet from "./detectSpeedInternet";
import detectDarkMode from "./detectDarkMode";
import detectRam from "./detectRam";
import detectCPU from "./detectCPU";
import detectGPU from "./detectGPU";
import detectExit from "./detectExit";
// import detectPlugins from "./detectPlugins";

const nativeObj = {
  os: detectOs.init(),
  browser: detectBrowser.init(),
  device: detectDevice.init(),
  lang: navigator.language,
  screen: `${screen.width}x${screen.height}px  ${window.screen.colorDepth}bits/pixel`,
  orientation: detectOrientation.init(),
  datetime: new Date().toLocaleTimeString(),
  datetoday: date.today("longDate"),
  speed: detectSpeedInternet.init(),
  darkmode: detectDarkMode.init(),
  ram: detectRam.init(),
  cpu: detectCPU.init(),
  gpu: detectGPU.init(),
  exit: detectExit.init(),
  // plugins: detectPlugins(), // TODO - Plugins not work
};

export default nativeObj;

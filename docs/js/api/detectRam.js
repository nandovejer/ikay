// This function return a promise
const detectRam = () => {
  return new Promise((resolve, reject) => { resolve(navigator.deviceMemory !== undefined ? navigator.deviceMemory : null); });
}

export default detectRam;
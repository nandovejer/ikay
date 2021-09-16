// This function return a promise

// const detectRam = () =>  navigator.deviceMemory !== undefined ? navigator.deviceMemory : null;

const detectRam = () =>
  new Promise((resolve, reject) => {
    resolve(navigator.deviceMemory !== undefined ? navigator.deviceMemory : null);
  });


export default detectRam;
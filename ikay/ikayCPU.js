function ikayCPU() {
    return {
        cpuCore: navigator.hardwareConcurrency,
        cpuPlatform: navigator.platform
    }
}

export default ikayCPU;
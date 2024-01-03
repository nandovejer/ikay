const OPERATIVE_SYSTEM_BY_PLATFORM = {
    Windows: ['Win32', 'Win64', 'Windows', 'WinCE'],
    macOS: ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    UNIX: ['X11'],
    Linux: ['Linux', 'FreeBSD', 'SunOS']
};


function ikayOs() {
    const byPlatformOs = () => {
        const platform = window.navigator.platform;
        for (let system in OPERATIVE_SYSTEM_BY_PLATFORM) {
            if (OPERATIVE_SYSTEM_BY_PLATFORM[system].indexOf(platform) !== -1) return system;
        }
        return null;
    }
    const byUsrAgentOs = ()=>{}

    return {
        osByPlatform: byPlatformOs(),
        osByUsrAgent: byUsrAgentOs()
    }
}
export default ikayOs;
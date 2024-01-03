const EVENT_TYPE = {
    pageEnter: "pageEnter",
    pageExit: "pageExit",
    pageClose: "pageClose",
    pageReload: "pageReload",
};
const emptyHistory = {
    pageEnter: [],
    pageExit: [],
    pageClose: [],
    pageReload: [],
};

function ikayTracking() {
    const localHistory = JSON.parse(localStorage.getItem('ikayLocalTrackingo1'));
    const updateHistory = (eventType) => {
        let history = !localHistory ? emptyHistory : localHistory;
        const time = new Date().toISOString();
        history[eventType].push(time);
        localStorage.setItem('ikayLocalTracking', JSON.stringify(history));
        // TODO - Promise and callback
        console.log(`Event: ${eventType}, Time: ${time}`);
    }

    document.addEventListener('visibilitychange', () =>
        document.visibilityState === 'visible' ? updateHistory(EVENT_TYPE.pageEnter) : updateHistory(EVENT_TYPE.pageExit)
    );

    window.addEventListener('beforeunload', () => updateHistory(EVENT_TYPE.pageClose));
    updateHistory(EVENT_TYPE.pageReload);
}

export default ikayTracking;

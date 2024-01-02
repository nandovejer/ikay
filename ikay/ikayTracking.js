function ikayTracking() {
    const STATUS = {
        pageEnter: "PageEnter",
        pageExit: "PageExit",
        pageClose: "PageClose",
        pageReload: "PageReload",
    };
    const localHistory = JSON.parse(localStorage.getItem('ikayLocalTracking'));
    let emptyHistory = {
        pageEnter: [],
        pageExit: [],
        pageClose: [],
        pageReload: [],
    };


    const updateHistory = (eventType) => {
        let history = !localHistory ? emptyHistory : localHistory;
        const time = new Date().toISOString();
        history[eventType].push(time);
        localStorage.setItem('ikayLocalTracking', JSON.stringify(history));
        
        console.log(`Event: ${eventType}, Time: ${time}`);
    }

    document.addEventListener('visibilitychange', () => {
        document.visibilityState === 'visible' ? updateHistory(STATUS.pageEnter) : updateHistory(STATUS.pageExit);
    });

    window.addEventListener('beforeunload', () => updateHistory(STATUS.pageClose));

    // Registrar evento de recarga de página
    updateHistory(STATUS.pageReload);
}

export default ikayTracking;

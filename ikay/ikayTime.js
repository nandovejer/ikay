function ikayTime() {
    const _date = new Date();

    return {
        fecha: _date.toLocaleDateString(navigator.language, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        hora: _date.toLocaleTimeString(navigator.language)
    }
}

export default ikayTime;

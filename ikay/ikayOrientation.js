function ikayOrientation() {

    return {
        orientation: window.matchMedia(
            "screen and (orientation: portrait)"
        ).matches ? "portrait" : "landscape"
    };
}

export default ikayOrientation;

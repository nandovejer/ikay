function ikayColorScheme() {
    return {
        colorScheme: window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"
    }
}
export default ikayColorScheme;

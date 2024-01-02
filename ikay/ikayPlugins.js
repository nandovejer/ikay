function ikayPlugins() {
    let _plugins = [];
    if (navigator.plugins) {
        Array.from(navigator.plugins).forEach((plugin) => {
            _plugins.push({
                name: plugin.name,
                description: plugin.description,
            });
        });
    }
    return { plugins: _plugins.length !== 0 ? _plugins : null };
}

export default ikayPlugins;

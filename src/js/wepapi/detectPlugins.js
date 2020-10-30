var detectPlugins = function () {
  if (navigator.plugins !== undefined || navigator.plugins !== null) {
    let result = [];
    navigator.plugins.forEach((item, index) => {
      result.push(item.name);
    });
    return result;
  }
};
export default detectPlugins;

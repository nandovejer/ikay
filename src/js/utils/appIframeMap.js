 function appIframeMap({lat, lon, outputSelector}){
    const mapURL = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed`;
    const tplMap = `<iframe src="${mapURL}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    outputSelector.innerHTML = tplMap;
  }

  export default appIframeMap;
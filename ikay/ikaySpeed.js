const NAVIGATOR_SPEED_TYPE = ["SLOW-2G", "2G", "3G", "4G"];
const byNavigator = () => navigator.connection && navigator.connection.effectiveType ? navigator.connection.effectiveType.toUpperCase() : null;
async function downloadSpeedKbps() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/8/88/Cadiz_-_1578_views_of_Sevilla%2C_Cadiz_and_Malaga_%28cropped%29.jpg";
    const startTime = performance.now(); // Marks the start of the download
    const response = await fetch(url);
    const buffer = await response.arrayBuffer(); // Downloads the image and converts it to a buffer
    const endTime = performance.now(); // Marks the end of the download
    const fileSizeKB = buffer.byteLength / 1024; // File size in kilobytes
    const downloadTimeSeconds = (endTime - startTime) / 1000; // Download time in seconds
    const downloadSpeedKbps = fileSizeKB / downloadTimeSeconds; // Download speed in kbps
    return downloadSpeedKbps.toFixed(2);
}

function ikaySpeed() {
    return {
        speedByNavigator: byNavigator(),
        downloadSpeedKbps: downloadSpeedKbps() // TODO - handle promise
    };
}

/* 
downloadSpeedKbps()
.then(speed => console.log(`Download Speed: ${speed} kbps`)) 
.catch(error => console.error('Error al calcular la velocidad de descarga:', error))
*/

export default ikaySpeed;
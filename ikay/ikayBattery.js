function ikayBattery(onChargingChange, onLevelChange, onChargingTimeChange, onDischargingTimeChange) {
    if (!navigator.getBattery) {
        console.log("Battery Status API is not supported by this browser.");
        return;
    }

    navigator.getBattery().then(battery => {

        if (onChargingChange) {
            onChargingChange(battery.charging);
        }
        if (onLevelChange) {
            onLevelChange(battery.level);
        }

        if (onChargingChange) {
            battery.addEventListener('chargingchange', () => onChargingChange(battery.charging));
        }
        if (onLevelChange) {
            battery.addEventListener('levelchange', () => onLevelChange(battery.level));
        }
        if (onChargingTimeChange) {
            battery.addEventListener('chargingtimechange', () => onChargingTimeChange(battery.chargingTime));
        }
        if (onDischargingTimeChange) {
            battery.addEventListener('dischargingtimechange', () => onDischargingTimeChange(battery.dischargingTime));
        }
    }).catch(err => {
        console.log("Error accessing the battery API: " + err);
    });
}

export default ikayBattery;

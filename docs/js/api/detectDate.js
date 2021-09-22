const get = (type) => {
	let pattern = {};
	const lang = navigator.language.toLowerCase();
	const date = new Date();
	switch (type) {
		case "time":
			// Viernes
			pattern = {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				hour12: false,
			};
			break;
		case "day":
			// Viernes
			pattern = { weekday: "long" };
			break;
		case "month":
			// octubre
			pattern = { month: "long" };
			break;
		case "year":
			// 2020
			pattern = { year: "numeric" };
			break;
		case "longDate":
			//  "viernes, 9 de octubre de 2020"
			pattern = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			break;
		default:
			pattern = {};
			break;
	}
	return new Intl.DateTimeFormat(lang, pattern).format(date);
};

export const detectDate = () => {
	return new Promise((resolve, reject) => {
		resolve({
			long: get("longDate"),
			short: get(),
			time: get("time"),
		});
		reject(null);
	});
};

export default detectDate;

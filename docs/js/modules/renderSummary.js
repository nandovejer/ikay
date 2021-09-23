export const renderSummary = (data) => {
	const list = document.querySelector(".js-ikaySummary");

	if (list !== null && data !== null) {
		const objectFiltered = (theObj, callback) => {
			const asArray = Object.entries(theObj);
			asArray.filter(([key, val]) => callback([key, val]));
		};

		/**
		 * Second level
		 * @param {object} data
		 */
		const isObjRender = (data) => {
			const mainTitle = data[0];
			const value = data[1];
			let tlpItems = "";
			// In this case, value is a object not a single value
			objectFiltered(value, (item) => {
				let title = item[0];
				let value = item[1];
				tlpItems += `<li><strong>${title}: </strong><span>${value}</span></li>`;
			});
			const tplMain = `<li><strong>${mainTitle}</strong></li><ul>${tlpItems}</ul>`;
			list.insertAdjacentHTML("beforeend", tplMain);
		};
		/**
		 * First Level
		 * @param {object} data
		 */
		const isDefaultRender = (data) => {
			let title = data[0];
			let value = data[1];
			const tpl = `<li><strong>${title}: </strong><span>${value}</span></li>`;
			list.insertAdjacentHTML("beforeend", tpl);
		};

		objectFiltered(data, (item) => {
			const value = item[1];
			typeof value === "object" && value !== null && value !== undefined
				? isObjRender(item)
				: isDefaultRender(item);
		});
	}
};
export default renderSummary;

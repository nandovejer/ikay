export const cardMoreInfo = () => {
	const cards = document.querySelectorAll(".js-card");
	if (cards !== null && cards !== undefined) {
		cards.forEach((card) => {
			const btn = card.querySelector(".js-card-openInfo");
			const main = card.querySelector(".js-card-mainInfo");
			btn.addEventListener("click", () => {
				let isOpen = main.getAttribute("data-open") === "true" || main.getAttribute("data-open") === "";
				isOpen ? main.setAttribute("data-open", "false") : main.setAttribute("data-open", "true");
			});
		});
	} else {
		console.error("Cards are misssing");
	}
};

export default cardMoreInfo;

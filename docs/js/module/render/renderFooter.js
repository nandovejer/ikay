import { tpl_footer } from "../../template/tpl_footer.js";

export const renderFooter = () => {
	const scope = document.querySelector(".js-footer");
	scope.innerHTML = tpl_footer("es");
};
export default renderFooter;

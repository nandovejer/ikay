export const tpl_footer = (lang) => {
	switch (true) {
		case lang === "en":
			return `
			<article class="js-footer-status">
				<h3>Status of your data</h3>
				<p>All data shown on this website is save only on your device, never will be stored in a external server, why? because I'm not interested in your data, I'm interested in your awareness.</p>
				<p>However, I don't know if GitHub (the server hosting) or ipapi.co (external API that I use to determine your city, country and telephone company from your IP) generate any type of data storage similar to shown on this website. But hey, if you are not worried about sharing every dinner, moment, memory or feeling on Facebook, you will not be worried about the information (similar to this) or this aweasome web of free streaming movies recomended by your friend. :D irony :)</p>
			</article>
			<article class="class="js-footer-legal">
					<p>I want to thank <a href="https://github.com/RobinLinus">Robin Linus</a> and this projects about the privacy</p>
					<p><a href="https://opensource.org/licenses/MIT">MIT LICENSE - https://opensource.org/licenses/MIT</a>.</p>
			</article>
      `;
			break;
		case lang === "es":
			return `
			<article class="js-footer-status">
				<h3>Estado de tus datos</h3>
				<p>Todos los datos que aparecen en esta web permanecen almacenados solamente en tu dispositivo, en ningún momento son envidos a ningún servidor externo, ¿por qué? porque no me interesan tus datos, me interesa tu concienciación.</p>
				<p>No obstante, desconozco si GitHub (el servidor donde se aloja esta web) o ipapi.co (API externa que utilizo para determinar tu ciudad, país y compañía de telefonía a partir de tu IP) generan algún tipo almacenamiento de dato similar o ajeno al mostrado en esta web. Pero bueno, si no te preocupa compartir en facebook cada cena, momento, recuerdo o sentimiento, tampoco te preocupará la información (similar a esta) que almacenará sobre ti esa web maravillosa donde te han dicho que ves peliculas online de pagp, pero gratis:D Pérmiteme un poco de ironía :)</p>
			</article>
			<article class="class="js-footer-legal">
					<p>Quiero dar las gracias a <a href="https://github.com/RobinLinus">Robin Linus</a> por su inspirtación</p>
					<p><a href="https://opensource.org/licenses/MIT">LICENCIA MIT - https://opensource.org/licenses/MIT</a>.</p>
			</article>
				`;
			break;
		default:
			break;
	}
};

export default tpl_footer;

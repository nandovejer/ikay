var tplFooter = function (properties) {
  const txt = properties.footer;
  const template = `
      <article class="footer__article">
        <h3>${txt.title}</h3>
        ${txt.content1}
        ${txt.content2}
      </article>
      <article class="footer__article footer__article--legal">
          ${txt.thanks}
          ${txt.license}
      </article>
    `;

  return template;
};
export default tplFooter;

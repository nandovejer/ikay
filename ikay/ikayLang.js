function ikayLang() {
  const browserLanguage = navigator.language || "";
  const listLanguage = navigator.languages || [];

  const parts = browserLanguage.split("-");
  const currentLang = parts[0]; // 'en'
  const currentCountry = parts.length > 1 ? parts[1] : null;

  return {
    lang: currentLang,
    country: currentCountry,
    fullLang: listLanguage,
  };
}
export default ikayLang;

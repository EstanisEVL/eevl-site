import { useTranslation } from "react-i18next";
import { StyledLanguageTogglerMobile } from "../navbar/NavBarStyles";

const LanguageTogglerMobile = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLang = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <StyledLanguageTogglerMobile>
      <input type="checkbox" onClick={handleChangeLang} />
      {i18n.language === "en" ? "ES" : "EN"}
    </StyledLanguageTogglerMobile>
  );
};

export default LanguageTogglerMobile;

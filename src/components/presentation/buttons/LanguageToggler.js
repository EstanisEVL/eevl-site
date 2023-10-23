import { languages } from "../../utils/Languages.js";
import { useTranslation } from "react-i18next";
import {
  StyledLanguageToggler
} from "../navbar/NavBarStyles.js";

const LanguageToggler = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledLanguageToggler>
      {languages.map((language) => {
        return (
          <button
            key={language.id}
            onClick={() => handleChangeLang(language.title.toLowerCase())}
          >
            {language.title}
          </button>
        );
      })}
    </StyledLanguageToggler>
  );
};

export default LanguageToggler;

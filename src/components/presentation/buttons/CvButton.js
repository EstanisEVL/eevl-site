import CvEs from "../../../assets/cv/CV-Estanislao-Elias-Varela-Lucius-Frontend-Developer-ESP.pdf";
import CvEn from "../../../assets/cv/Estanislao-Elias-Varela-Lucius-Frontend-Developer-ENG.pdf";
import useWindowSize from "../../../hooks/useWindowSize";
import { StyledButton } from "./ButtonStyles";

const CvButton = ({ isVisible, text, language }) => {
  const size = useWindowSize();
  return (
    <>
      {size.width < 769 ? (
        <StyledButton
          padding={"18px 50px"}
          fs="13px"
          as="a"
          href={language === "en" ? CvEn : CvEs}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </StyledButton>
      ) : (
        <StyledButton
          padding={"12px 16px"}
          fs="13px"
          as="a"
          href={language === "en" ? CvEn : CvEs}
          target="_blank"
          rel="noopener noreferrer"
          className={isVisible || "hidden scroll-in"}
        >
          {text}
        </StyledButton>
      )}
    </>
  );
};

export default CvButton;

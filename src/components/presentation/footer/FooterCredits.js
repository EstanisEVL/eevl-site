import useObserver from "../../../hooks/useObserver";
import { StyledFooterCredits } from "./FooterStyles";

const FooterCredits = ({ language }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  return (
    <StyledFooterCredits ref={fromRef}>
      <a
        href="https://github.com/EstanisEVL"
        rel="noopener noreferrer"
        target="_blank"
        className={isIntersecting ? "" : "hidden scroll-in"}
      >
        <div>
          {language === "en"
            ? "Built by Estanislao Elias Varela Lucius."
            : "Hecho por Estanislao Elias Varela Lucius."}
        </div>
      </a>
    </StyledFooterCredits>
  );
};

export default FooterCredits;

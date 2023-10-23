import CvEs from "../../../assets/cv/CV-Estanislao-Elias-Varela-Lucius-Frontend-Developer-ESP.pdf";
import CvEn from "../../../assets/cv/Estanislao-Elias-Varela-Lucius-Frontend-Developer-ENG.pdf";
import useObserver from "../../../hooks/useObserver";
import {
  StyledHeroSection,
  StyledHeroBackgroundContainer,
  StyledHeroH1,
  StyledHeroH2,
  StyledHeroH3,
  StyledHeroP,
  StyledHeroButton,
} from "./HeroStyles";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  const [t, i18n] = useTranslation("global");
  return (
    <StyledHeroSection ref={fromRef}>
      <StyledHeroBackgroundContainer>
        <div>
          <StyledHeroH1 className={isIntersecting ? "" : "hidden scroll-in"} delay={"0.5s"}>
            {t("hero.h1")}
          </StyledHeroH1>
        </div>
        <div>
          <StyledHeroH2 className={isIntersecting ? "" : "hidden scroll-in"} delay={"1.5s"}>
            {t("hero.h2")}
          </StyledHeroH2>
        </div>
        <div>
          <StyledHeroH3 className={isIntersecting ? "" : "hidden scroll-in"} delay={"2.5s"}>
            {t("hero.h3")}
          </StyledHeroH3>
        </div>
        <div>
          <StyledHeroP className={isIntersecting ? "" : "hidden scroll-in"} delay={"3.5s"}>
            {t("hero.p")}
          </StyledHeroP>
        </div>

        <StyledHeroButton
          padding="20px 28px"
          as="a"
          href={i18n.language === "en" ? CvEn : CvEs}
          target="_blank"
          rel="noopener noreferrer"
          className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"4.5s"}
        >
          {t("hero.btnText")}
        </StyledHeroButton>
      </StyledHeroBackgroundContainer>
    </StyledHeroSection>
  );
};

export default Hero;

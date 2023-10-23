import { useTranslation } from "react-i18next";
import useObserver from "../../../hooks/useObserver";
import { StyledHeaderVariation } from "../headers/StyledHeader";
import {
  StyledContactBackgroundContainer,
  StyledContactBtn,
  StyledContactP,
  StyledContactSection,
  StyledContactTitle,
} from "./ContactStyles";

const Contact = ({ title, section }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  const [t, i18n] = useTranslation("global");

  return (
    <StyledContactBackgroundContainer>
      <StyledContactSection id="contact" ref={fromRef}>
        <StyledHeaderVariation
          section={section}
          className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"2s"}
        >
          {title}
        </StyledHeaderVariation>

        <StyledContactTitle className={isIntersecting ? "" : "hidden scroll-in"} delay={"3s"}>
          {t("contact.title")}
        </StyledContactTitle>

        <StyledContactP className={isIntersecting ? "" : "hidden scroll-in"} delay={"4s"}>
          {t("contact.p")}
        </StyledContactP>

        <StyledContactBtn
          as="a"
          padding={"20px 28px"}
          href="mailto:estanislaovl@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"5s"}
        >
          {t("contact.btnText")}
        </StyledContactBtn>
      </StyledContactSection>
    </StyledContactBackgroundContainer>
  );
};

export default Contact;

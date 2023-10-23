import styled from "styled-components";
import { StyledButton } from "../buttons/ButtonStyles";
import {
  StyledColumnSection,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
} from "../../../GlobalStyle";
import bgImg from "../../../assets/img/bg/dark/bg-wide-desktop-dark.png";
import bgImgAlt from "../../../assets/img/bg/light/bg-wide-desktop-light.png";
import bgMobileImg from "../../../assets/img/bg/dark/bg-wide-mobile-dark.png";
import bgMobileImgAlt from "../../../assets/img/bg/light/bg-wide-mobile-light.png";
import bgBoxMobile from "../../../assets/img/bg/dark/bg-box-mobile-dark.png"
import bgBoxMobileAlt from "../../../assets/img/bg/light/bg-box-mobile-light.png"

export const StyledHeroSection = styled(StyledColumnSection)`
  font-family: "Inter";
  line-height: 2rem;
  margin-top: 10rem;
  min-height: 75vh;
  min-width: 100%;
  @media (max-width: 768px) {
    margin-top: 5rem;
    min-height: 100vh;
    background-image: url(${props => props.theme.filter === false ? bgBoxMobileAlt : bgBoxMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .hidden {
    opacity: 0;
  }
`;

export const StyledHeroBackgroundContainer = styled.div`
  background-image: url(${props => props.theme.filter === false ? bgMobileImgAlt : bgMobileImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;

  @media (min-width: 769px) {
    background-image: url(${props => props.theme.filter === false ? bgImgAlt : bgImg });
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    div {
      width: 85%;
    }
  }
`

export const StyledHeroH1 = styled(StyledH1).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  @media (max-width: 768px) {
    margin-top: 15rem;
  }
  font-weight: 400;
  line-height: 1.1;
  margin-block-end: 1.667rem;
  margin-inline-start: 0.1667rem;
  padding-top: 2rem;
  transition: opacity ${(props) => props.delay} ease-in;
  opacity: 1;
`;

export const StyledHeroH2 = styled(StyledH2).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1.1;
  transition: opacity ${(props) => props.delay} ease-in;
  opacity: 1;
`;

export const StyledHeroH3 = styled(StyledH3).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-weight: 600;
  line-height: 0.9;
  margin-block-start: 0.85rem;
  margin-top: 0.85rem;
  transition: opacity ${(props) => props.delay} ease-in;
  opacity: 1;
`;

export const StyledHeroP = styled(StyledP).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  margin-top: 2rem;
  line-height: 1.3;
  margin-block-start: 1.115em;
  max-width: 540px;
  transition: opacity ${(props) => props.delay} ease-in;
  opacity: 1;
`;

export const StyledHeroButton = styled(StyledButton).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-family: "SF-Mono";
  margin-top: 4rem;
  position: relative;
  -webkit-font-smoothing: antialiased;
  transition: background-color .5s ease, opacity ${(props) => props.delay} ease-in;
  opacity: 1;
`;

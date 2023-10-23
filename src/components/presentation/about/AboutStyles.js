import styled from "styled-components";
import { StyledColumnSection, StyledP, StyledUl } from "../../../GlobalStyle";
import bgImg from "../../../assets/img/bg/dark/bg-about-desktop-dark.png";
import bgImgAlt from "../../../assets/img/bg/light/bg-about-desktop-light.png";

export const StyledAboutSection = styled(StyledColumnSection)`
  @media (min-width: 769px) {
    background-image: url(${props => props.theme.filter === false ? bgImgAlt : bgImg});
    background-position: right;
    background-repeat: no-repeat;
    max-width: 1600px;
    padding: 100px 0;
    user-select: none;
  }
  font-family: "Inter";
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 75rem;
  opacity: 1;
  padding: 80px 0;
  -webkit-font-smoothing: antialiased;
  .hidden {
    opacity: 0;
  }
  .scroll-in {
    transform: translateY(100px);
  }
`;

export const StyledAboutInnerDiv = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .content-div {
      max-width: 60%;
    }
  }
`;

export const StyledAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledAboutP = styled(StyledP).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-family: "Calibre";
  line-height: 1.3;
  margin-bottom: 0;
  opacity: 1;
  transition: opacity ${(props) => props.delay} ease-in;
`;

export const StyledAboutUl = styled(StyledUl).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  opacity: 1;
  transition: opacity ${(props) => props.delay} ease-in;
  li {
    color: ${(props) => props.theme.fcSecondary};
    display: flex;
    align-items: center;
    position: relative;
    font-family: "SF-Mono";
    font-size: 13px;
    line-height: 1.3;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 20px;
    &:before {
      position: absolute;
      box-sizing: border-box;
      color: ${(props) => props.theme.icon};
      content: "▹";
      font-size: 1.17rem;
      left: 0;
      line-height: 1rem;
    }
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(2, minmax(140px, 200px));
  }
`;

import styled from "styled-components";
import { StyledH2, StyledP } from "../../../GlobalStyle";
import { StyledButton } from "../buttons/ButtonStyles";
import bgImg from "../../../assets/img/bg/dark/bg-contact-desktop-dark.png";
import bgImgAlt from "../../../assets/img/bg/light/bg-contact-desktop-light.png";
import bgMobileImg from "../../../assets/img/bg/dark/bg-contact-mobile-dark.png";
import bgMobileImgAlt from "../../../assets/img/bg/light/bg-contact-mobile-light.png";

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.fc};
  font-family: "Inter";
  line-height: 1.3;
  margin-bottom: 50px;
  max-width: 600px;
  padding: 60px 0;
  opacity: 1;
  text-align: center;
  visibility: visible;
  -webkit-font-smoothing: antialiased;
  @media (min-width: 769px) {
    margin: 0px auto 100px;
    padding: 100px 0;
  }
  .hidden {
    opacity: 0;
  }
  .scroll-in {
    transform: translateY(50px);
  }
`;

export const StyledContactBackgroundContainer = styled.div`
  background-image: url(${props => props.theme.filter === false ? bgMobileImgAlt : bgMobileImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  min-width: 100%;
  @media (min-width: 769px) {
    background-image: url(${props => props.theme.filter === false ? bgImgAlt : bgImg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const StyledContactTitle = styled(StyledH2).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-weight: 600;
  line-height: 1.1;
  margin-block-end: 0.25em;
  opacity: 1;
  transition: opacity ${(props) => props.delay} ease-in;
`;

export const StyledContactP = styled(StyledP).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  opacity: 1;
  transition: opacity ${(props) => props.delay} ease-in;
`;

export const StyledContactBtn = styled(StyledButton).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  margin-top: 50px;
  font-family: "SF-Mono";
  opacity: 1;
  transition: background-color .5s ease, opacity ${(props) => props.delay} ease-in;
`;

export const StyledLeftSocials = styled.div`
  bottom: 0;
  display: block;
  font-family: "Inter";
  font-size: 20px;
  left: 20px;
  line-height: 1.3;
  position: fixed;
  right: auto;
  width: 40px;
  z-index: 10;
  -webkit-font-smoothing: antialiased;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    opacity: 1;
    transition: opacity 0.5s ease-in;
    -webkit-box-align: center;
    li {
      transition: transform 0.5s ease;
      a {
        color: ${(props) => props.theme.fcSecondary};
        display: inline-block;
        padding: 10px;
        position: relative;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        svg {
          height: 20px;
          width: 20px;
          max-width: 100%;
          vertical-align: middle;
        }
      }
      &:hover {
        transform: translateY(-5px);
        a {
          color: ${(props) => props.theme.overlay};
        }
      }
    }
    li:last-child {
      margin-bottom: 20px;
    }
    &:after {
      background-color: ${(props) => props.theme.fcSecondary};
      box-sizing: border-box;
      content: "";
      display: block;
      height: 90px;
      margin: 0 auto;
      width: 1px;
    }
  }
  .hidden {
    opacity: 0;
  }
`;

export const StyledRightEmail = styled.div`
  display: block;
  bottom: 0;
  font-family: "Inter";
  font-size: 20px;
  left: auto;
  line-height: 1.3;
  position: fixed;
  right: 40px;
  opacity: 1;
  width: 40px;
  z-index: 10;
  -webkit-font-smoothing: antialiased;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    opacity: 1;
    transition: opacity 0.5s ease-in;
    -webkit-box-align: center;
    a {
      color: ${(props) => props.theme.fcSecondary};
      display: block;
      font-family: "Courier";
      font-size: 12px;
      letter-spacing: 0.1em;
      line-height: 18px;
      margin: 20px auto;
      padding: 10px;
      position: relative;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      transition: color 0.5s ease, transform 0.5s ease;
      writing-mode: vertical-rl;
      &:hover {
        transform: translateY(-5px);
        color: ${(props) => props.theme.overlay};
      }
    }
    &:after {
      background-color: ${(props) => props.theme.fcSecondary};
      box-sizing: border-box;
      content: "";
      display: block;
      height: 90px;
      width: 1px;
    }
  }
  .hidden {
    opacity: 0;
  }
`;

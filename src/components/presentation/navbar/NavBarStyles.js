import styled, { keyframes } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const fontSizeXs = "12px";
const fontSize = "13px";
const bg = (props) => props.theme.bg;
const bgSecondary = (props) => props.theme.bgSecondary;
const fc = (props) => props.theme.fc;
const icon = (props) => props.theme.icon;
const overlay = (props) => props.theme.overlay;
const slideIn = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0);
  }
`;

export const StyledDesktopNavigation = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
`;

export const StyledNavHeader = styled.header`
  @media (max-width: 768px) {
    padding: 0px 25px;
  }
  backdrop-filter: none;
  background-color: ${bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: none;
  font-family: "Inter";
  font-size: 20px;
  line-height: 1.3em;
  height: 70px;
  opacity: 1;
  padding: 0px 50px;
  pointer-events: auto;
  position: fixed;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  top: 0;
  user-select: auto;
  width: 100%;
  z-index: 11;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  -webkit-font-smoothing: antialiased;
  transition: transform 1.5s ease-out;
  .hidden {
    opacity: 0;
  }
  .scroll-in {
    transform: translateY(-50px);
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  counter-reset: item 0;
  font-family: "Courier";
  position: relative;
  width: 100%;
  z-index: 12;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
`;

export const StyledMobileNavigation = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledMobileHamburguer = styled.div`
  align-self: center;
  position: relative;
  margin-right: -15px;
  right: 0;
  z-index: 1;
  padding: 15px;
  cursor: pointer;
  .hamburger-react {
    appearance: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

export const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMobileMenu = styled.aside`
  background-color: ${bgSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(75vw, 400px);
  height: 100vh;
  padding: 50px 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  font-family: "Courier";
  font-size: 20px;
  line-height: 1.3em;
  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;
  z-index: 9;
  visibility: visible;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  animation: ${slideIn} 0.3s ease;
`;

export const StyledMobileOl = styled.ol`
  width: 100%;
  box-sizing: border-box;
  list-style-type: none;
  text-align: center;
`;

export const StyledMobileLi = styled.li`
  cursor: pointer;
  counter-increment: item 1;
  font-size: 18px;
  line-height: 1.3;
  margin: 0 auto 20px;
  position: relative;
  &:before {
    box-sizing: border-box;
    color: ${icon};
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
    content: "0" counter(item, decimal) ".";
  }
`;

export const StyledMobileLink = styled(Link)`
  width: 100%;
  display: inline-block;
  color: ${fc};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  font-size: 18px;
  position: relative;
  padding: 3px 20px 20px;
`;

export const StyledThemeTogglerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledThemeToggler = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  input[type="checkbox"] {
    display: none;
  }
  span {
    position: absolute;
    cursor: pointer;
    background-color: #b6b6b6;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
    &:before {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #333;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }
  input[type="checkbox"]:checked + span::before {
    transform: translateX(25px);
    background-color: #333;
  }
  input[type="checkbox"]:checked + span {
    background-color: #e2ff2d;
  }
`;

export const StyledThemeTogglerMobile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 48px;
  min-height: 48px;
  input[type="checkbox"] {
    display: none;
  }
  &:hover {
    background-color: ${props => props.theme.fcSecondary};
  }
`;

export const StyledLanguageToggler = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: ${(props) => props.theme.overlay};
    cursor: pointer;
    font-family: "SF-Mono";
    padding: 10px;
    transition: all 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: ${(props) => props.theme.overlay};
      color: ${(props) => props.theme.bg};
    }
  }
`;

export const StyledLanguageTogglerMobile = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.overlay};
  border-radius: 4px;
  color: ${(props) => props.theme.bg};
  cursor: pointer;
  font-family: "SF-Mono";
  font-size: 16px;
  min-width: 48px;
  min-height: 48px;
  transition: all 0.3s ease, color 0.3s ease;
  input[type="checkbox"] {
    display: none;
  }
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
  }
`;

export const StyledNavLinks = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "opacitydelay" && prop !== "transformdelay"
})`
  counter-increment: item 1;
  font-family: "SF-Mono";
  font-size: ${fontSize};
  position: relative;
  opacity: 1;
  transition: opacity ${(props) => props.opacitydelay} ease-in,
    transform ${(props) => props.transformdelay} ease-in;
  a {
    color: ${fc};
    display: inline-block;
    padding: 10px;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    &:before {
      color: ${icon};
      box-sizing: border-box;
      content: "0" counter(item) ".";
      font-size: ${fontSizeXs};
      margin-right: 5px;
      text-align: right;
    }
    &:after {
      content: "";
      background-color: ${overlay};
      width: 0;
      height: 1px;
      bottom: 0.1em;
      opacity: 0.5;
      position: relative;
      display: block;
      transition: width 0.3s ease;
    }
    &:hover {
      color: ${overlay};
      &:after {
        width: 100%;
      }
    }
  }
`;

import { styled } from "styled-components";
import { StyledH4 } from "../../../GlobalStyle";

export const StyledHeader = styled(StyledH4).withConfig({
  shouldForwardProp: (prop) => prop !== "delay" && prop !== "section"
})`
  display: flex;
  align-items: center;
  font-family: "Calibre";
  font-weight: 600;
  line-height: 1.1;
  margin-block-start: 10px;
  margin-block-end: 40px;
  opacity: 1;
  position: relative;
  transition: opacity ${(props) => props.delay} ease-in;
  width: 100%;
  white-space: nowrap;
  -webkit-box-align: center;
  &:before {
    box-sizing: border-box;
    position: relative;
    color: ${(props) => props.theme.icon};
    content: "0" counter(section) ".";
    counter-increment: ${(props) => props.section};
    font-family: "SF-Mono";
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
    margin-right: 10px;
  }
  &:after {
    position: relative;
    background-color: rgb(35, 53, 84);
    box-sizing: border-box;
    content: "";
    display: block;
    height: 0.084rem;
    margin-left: 10px;
    width: 100%;
  }
`;

export const StyledHeaderVariation = styled.h4.withConfig({
  shouldForwardProp: (prop) => prop !== "section"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.icon};
  font-family: "SF-Mono";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
  margin-block-start: 10px;
  margin-block-end: 20px;
  margin-top: 10px;
  position: relative;
  transition: opacity ${(props) => props.delay} ease-in;
  visibility: visible;
  white-space: nowrap;
  -webkit-box-align: center;
  &:before {
    bottom: 0;
    box-sizing: border-box;
    position: relative;
    content: "0" counter(section) ".";
    counter-increment: ${(props) => props.section};
    font-weight: 400;
    font-size: 14px;
    margin-right: 10px;
  }
`;

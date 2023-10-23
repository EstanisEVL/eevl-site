import styled from "styled-components";

const bgTabTransparent = "rgba(0,0,0,0)";

const setTransition = (time) => `
    background-color ${time} ease
  `;

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fs" && prop !== "padding"
})`
  font-family: "SF-Mono";
  font-size: ${({fs}) => fs || "14px"};
  width: max-content;
  background-color: ${bgTabTransparent};
  display: block;
  line-height: 1;
  position: relative;
  border: 1px solid ${(props) => props.theme.btn};
  border-radius: 4px;
  color: ${(props) => props.theme.btn};
  text-align: center;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  padding: ${({padding}) => padding};
  cursor: pointer;
  opacity: 1;
  transition: ${setTransition(".5s")}, opacity 4.5s ease-in, transform 2.5s ease-in;
  &:active,
  &:hover {
    background-color: ${(props)=> props.theme.hover};
  }
`;
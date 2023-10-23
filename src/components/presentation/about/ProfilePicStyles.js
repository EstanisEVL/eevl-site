import styled from "styled-components";

export const StyledProfilePicDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 4rem;
  height: 100%;
  visibility: visible;
  @media (min-width: 769px) {
    margin-top: 0;
  }
`;

export const StyledProfilePicContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  width: 100%;
  background-color: ${(props) => props.theme.icon};
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  position: relative;
  visibility: visible;
  border-radius: 4px;
  opacity: 1;
  transform: translateY(1);
  transition: opacity ${(props) => props.delay} ease-in, transform 0.5s linear;
  max-width: 300px;
  z-index: 1;
  &:before {
    z-index: 1;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.overlay};
    border-radius: 4px;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:after {
    box-sizing: border-box;
    border: 0.05rem solid ${(props) => props.theme.overlay};
    border-radius: 4px;
    content: "";
    font-size: 18px;
    width: 100%;
    max-width: 300px;
    height: 100%;
    top: 1.67rem;
    left: 1.67rem;
    position: absolute;
    transition: all 0.3s ease;
    z-index: 0;
  }
  &:hover:after {
    top: 1.25rem;
    left: 1.25rem;
  }
  @media (max-width: 769px) {
    width: 70%;
  }
`;

export const StyledProfilePicImgContainer = styled.div`
  display: inline-block;
  filter: grayscale(100%) contrast(1);
  width: 100%;
  mix-blend-mode: ${props => props.theme.overlay === "#E2FF2D" ? "multiply" : "normal"};
  position: relative;
  vertical-align: middle;
  visibility: visible;
  z-index: 1;
  div:first-child {
    max-width: 41.6rem;
    img {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      filter: blur(5px);
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      position: static;
    }
  }
  div:nth-child(2) {
    width: 100%;
    height: 100%;
    background-color: rgb(232, 232, 232);
    object-fit: cover;
    opacity: 0;
    position: absolute;
    -webkit-font-smoothing: antialiased;
  }
  picture {
    -webkit-font-smoothing: antialiased;
    source {
      border-radius: 4px;
    }
    img {
      aspect-ratio: auto 500/500;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      display: block;
      max-width: none;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      will-change: opacity;
      border-radius: 4px;
    }
  }
  &:hover {
    filter: none;
    mix-blend-mode: normal;
  }
`;

import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  @media (min-width: 769px) {
    padding: 100px 0;
    max-width: 1000px;
    user-select: none;
  }
  padding: 80px 0;
  font-family: "Inter";
  font-size: 1.5rem;
  line-height: 1.3;
  max-width: 700px;
  opacity: 1;
  -webkit-font-smoothing: antialiased;
  .hidden {
    opacity: 0;
  }
  .scroll-in {
    transform: translateY(50px);
  }
`;

export const StyledProjectsListItem = styled.li`
  @media (min-width: 769px) {
    margin-bottom: 100px;
  }
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  align-items: center;
  box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
  margin-bottom: 2.5rem;
  opacity: 1;
  position: relative;
  visibility: visible;
  -webkit-box-align: center;
`;

export const StyledProjectsGrid = styled.div`
  @media (min-width: 769px) {
    grid-column: 5/-1;
    display: block;
    position: relative;
    text-align: right;
  }
  grid-area: 1/1/-1/7;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2.083333rem;
  position: relative;
  text-align: left;
  z-index: 5;
  -webkit-box-pack: center;
  &:hover {
    div:first-child {
      h3 {
        a {
          color: ${(props) => props.theme.fc};
        }
      }
    }
  }
`;

export const StyledProjectOverline = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  @media (min-width: 769px) {
    font-size: 13px;
    font-weight: 400;
  }
  color: ${(props) => props.theme.icon};
  font-family: "Courier";
  font-size: 1.083333rem;
  margin-block-end: 0.769234em;
  margin-block-start: 0.769234em;
  transition: opacity ${props => props.delay} ease-in, transform .5s ease-in;
`;

export const StyledProjectTitle = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  @media (min-width: 769px) {
    font-size: clamp(24px, 5vw, 28px);
    margin-block-end: 20px;
  }
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.1;
  margin-block-end: 0.4166667em;
  transition: opacity ${props => props.delay} ease-in, transform .5s ease-in;
`;

export const StyledProjectAnchor = styled.a`
  @media (min-width: 769px) {
    position: relative;
    color: ${(props) => props.theme.fcSecondary};
  }
  color: ${(props) =>
    props.theme.filter === false ? props.theme.bg : props.theme.fc};
  display: inline-block;
  position: static;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  transition: color 0.3s ease;
  z-index: 1;
  &:before {
    box-sizing: border-box;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;

export const StyledProjectDescription = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  @media (min-width: 769px) {
    background-color: ${(props) => props.theme.bgSecondary};
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    font-size: 18px;
    padding: 25px;
    z-index: 2;
  }
  padding: 1.666667rem 0;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  color: ${(props) =>
    props.theme.filter === false ? props.theme.bg : props.theme.fc};
  position: relative;
  user-select: none;
  z-index: 2;
  transition: opacity ${props => props.delay} ease-in, transform .5s ease-in;
  p {
    font-family: "Calibre";
    font-size: 18px;
    list-style-type: none;
    list-style-image: none;
    @media (max-width: 768px) {
      color: ${(props) =>
        props.theme.filter === false
          ? props.theme.bg
          : props.theme.fcSecondary};
    }
    color: ${(props) =>
      props.theme.filter === false
        ? props.theme.fcSecondary
        : props.theme.fcSecondary};
    a {
      color: ${(props) => props.theme.icon};
      text-decoration: none;
      display: inline-block;
      position: relative;
      text-decoration-skip-ink: auto;
      z-index: 1;
    }
  }
`;

export const StyledProjectTechList = styled.ul`
  @media (min-width: 769px) {
    margin-block-end: 10px;
    margin-block-start: 25px;
    -webkit-box-pack: end;
    li {
      font-size: 13px;
      margin: 0 0 5px 20px;
    }
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  margin-block-end: 0.555556em;
  margin-block-start: 0.555556em;
  position: relative;
  z-index: 2;
  -webkit-box-pack: start;
  li {
    margin-right: 0.833333rem;
    margin-bottom: 0.4166667rem;
    color: ${(props) => props.theme.fcSecondary};
    font-family: "Courier";
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    li {
      font-size: 1.083333rem;
      color: ${(props) =>
        props.theme.filter === false
          ? props.theme.bg
          : props.theme.fcSecondary};
    }
  }
`;

export const StyledProjectsLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  @media (min-width: 769px) {
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: -10px;
    -webkit-box-pack: end;
    a {
      align-items: center;
      padding: 10px;
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
        text-align: right;
      }
    }
  }
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: -10px;
  margin-right: 0;
  position: relative;
  -webkit-box-align: center;
  -webkit-box-pack: start;
  transition: opacity ${props => props.delay} ease-in, transform .5s ease-in;
  a {
    color: ${(props) =>
      props.theme.filter === false ? props.theme.bg : props.theme.icon};
    display: flex;
    justify-content: center;
    padding: 0.833333rem;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    z-index: 1;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    transition: transform 0.3s ease;
    svg {
      width: 20px;
      max-width: 100%;
      height: 20px;
      overflow-x: hidden;
      overflow-y: hidden;
      text-align: left;
      vertical-align: middle;
      title {
        fill: none;
      }
      path {
        fill: none;
      }
    }
    &:hover {
      transform: scale(1.3);
    }
  }
`;

// MOVER A OTRO COMPONENTE
export const StyledProjectImg = styled.div`
  @media (min-width: 769px) {
    grid-column: 1/8;
    border-radius: 4px;
    a {
      border-radius: 4px;
      div {
        border-radius: 4px;
        filter: grayscale(100%) contrast(1) brightness(90%);
        div {
          border-radius: 4px;
          img {
            border-radius: 4px;
          }
        }
        img {
          border-radius: 4px;
          vertical-align: middle;
        }
        picture {
          img {
            border-radius: 4px;
          }
        }
      }
    }
  }
  grid-area: 1/6/-1/-1;
  grid-column: 1/-1;
  height: 100%;
  box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
  opacity: 1;
  position: relative;
  z-index: 1;
  a {
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.theme.filter === false ? "transparent" : props.theme.hover};
    color: ${(props) => props.theme.fcSecondary};
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    vertical-align: middle;
    z-index: 1;
    opacity: 1;
    transition: opacity 2s ease-in, transform 1s ease-in;
    &:before {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.bg};
      box-sizing: border-box;
      content: "";
      display: block;
      mix-blend-mode: ${(props) =>
        props.theme.bg === "#030C2E" ? "screen" : "difference"};
      position: absolute;
      /* z-index: 3; */
    }
    div {
      width: auto;
      max-width: 100%;
      height: 100%;
      display: inline-block;
      filter: grayscale(25%) contrast(1) brightness(40%);
      mix-blend-mode: multiply;
      object-fit: cover;
      position: relative;
      vertical-align: middle;
      div {
        max-width: 700px;
        display: block;
        img {
          width: 100%;
          display: block;
          filter: blur(5px);
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          max-width: 100%;
          object-fit: cover;
          position: static;
        }
      }
      img {
        max-width: none;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        filter: blur(5px);
        object-fit: cover;
        opacity: 0;
        position: absolute;
      }
      picture {
        img {
          aspect-ratio: auto 700/438;
          opacity: 1;
          transform: translateZ(0);
          will-change: opacity;
          filter: none;
        }
      }
    }
  }
`;

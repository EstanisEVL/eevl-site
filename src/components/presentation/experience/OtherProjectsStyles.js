import styled from "styled-components";
import { StyledH2 } from "../../../GlobalStyle";

export const StyledOtherProjectsSection = styled.section`
  @media (min-width: 769px) {
    padding: 100px 0;
    max-width: 1000px;
    user-select: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter";
  font-size: 18px;
  line-height: 1.3;
  max-width: 1000px;
  padding: 80px 0;
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  .hidden {
    opacity: 0;
  }
  .scroll-in {
    transform: translateY(50px);
  }
`;

export const StyledOtherProjectsH2 = styled(StyledH2).withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 600;
  line-height: 1.1;
  margin-block-end: 0.416667em;
  opacity: 1;
  visibility: visible;
  transition: opacity ${(props) => props.delay} ease-in;
`;

export const StyledArchiveLink = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  color: ${(props) => props.theme.overlay};
  font-family: "Courier";
  font-size: $fz-sm;
  opacity: 1;
  position: relative;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  visibility: visible;
  transition: opacity ${(props) => props.delay} ease-in, transform .4s ease-in;
  &:after {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.overlay};
    content: "";
    bottom: 0.1em;
    display: block;
    height: 1px;
    opacity: 0.5;
    position: relative;
    width: 0px;
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const StyledOtherProjectsGrid = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style-type: none;
  margin-bottom: 80px;
  margin-block-start: 2.77778em;
  position: relative;
  opacity: 1;
  transition: opacity ${(props) => props.delay} ease-in, transform .75s ease-in;
  .styled-link {
    cursor: default;
    box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
    opacity: 1;
    position: relative;
    visibility: visible;
    transition: transform 0.15s ease;
    &:hover {
      transform: translateY(-5px);
      div {
        header {
          h3 {
            a {
              color: ${(props) =>
                props.theme.filter === false
                  ? props.theme.fc
                  : props.theme.overlay};
            }
          }
        }
      }
    }
    div {
      padding: 2.66667rem 2.33333rem;
      background-color: ${(props) => props.theme.bgSecondary};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      -webkit-box-align: center;
      -webkit-box-pack: justify;
      header {
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
          padding: 0;
          -webkit-box-align: center;
          -webkit-box-pack: justify;
          div:first-child {
            color: ${(props) => props.theme.overlay};
            margin: 0;
            svg {
              width: 40px;
              height: 40px;
              max-width: 100%;
              vertical-align: middle;
              title {
                fill: none;
              }
              path {
                fill: none;
              }
            }
          }
          div:nth-child(2) {
            display: flex;
            align-items: center;
            margin: 0;
            margin-right: -10px;
            a {
              color: ${(props) => props.theme.fcSecondary};
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              text-decoration-skip-ink: auto;
              z-index: 1;
              -webkit-box-align: center;
              -webkit-box-pack: center;
              position: relative;
              svg {
                width: 22px;
                height: 22px;
                margin-top: -4px;
                max-width: 100%;
                vertical-align: middle;
              }
            }
          }
        }
        h3 {
          font-family: "Calibre";
          font-size: 22px;
          font-weight: 600;
          line-height: 1.1;
          margin-block-end: 0.833333rem;
          a {
            color: ${(props) => props.theme.fc};
            display: inline-block;
            position: static;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            z-index: 1;
            &:before {
              box-sizing: border-box;
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              position: absolute;
              z-index: 0;
            }
          }
        }

        div:nth-child(3) {
          p {
            color: ${(props) => props.theme.fcSecondary};
            font-family: "Calibre";
            font-size: 17px;
          }
        }
      }
      div {
        padding: 0;
        ul {
          display: flex;
          flex-grow: 1;
          flex-wrap: wrap;
          align-items: flex-end;
          list-style-type: none;
          margin-block-start: 1.11111em;
          -webkit-box-flex: 1;
          li {
            color: ${(props) => props.theme.fcSecondary};
            font-family: "Courier";
            font-size: 12px;
            line-height: 1.75;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

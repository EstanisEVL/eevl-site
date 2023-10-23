import styled from "styled-components";

export const StyledJobsSection = styled.section`
  padding: 80px 0;
  color: ${(props) => props.theme.fc};
  font-family: "Calibre";
  font-size: 1.5rem;
  line-height: 1.3;
  max-width: 700px;
  opacity: 1;
  visibility: visible;
  -webkit-font-smoothing: antialiased;
  .inner {
    opacity: 1;
    transition: opacity 3s ease-in;
  }
  @media (min-width: 769px) {
    padding: 100px 0;
    font-size: 20px;
    .inner {
      display: flex;
      min-height: 340px;
    }
  }
  .hidden {
    opacity: 0;
  }
`;

export const StyledJobsTabs = styled.div`
  font-family: "Calibre";
  width: calc(100% + 50px);
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;
  margin-left: -25px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
  padding-left: 2rem;
  z-index: 3;
  &::-webkit-scrollbar {
    width: 12px;

  }
  &::-webkit-scrollbar-thumb {
    background-color: #495670;
    border: 3px solid ${(props) => props.theme.bg};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bg};
  }
  .active-tab {
    color: ${(props) =>
      props.theme.filter === false ? props.theme.fc : props.theme.overlay};
    background-color: ${(props) =>
      props.theme.filter === false
        ? props.theme.icon
        : props.theme.bgSecondary};
    border-bottom-color: ${(props) =>
      props.theme.filter === false ? props.theme.overlay : props.theme.icon};
    border-bottom-style: solid;
    border-bottom-width: 2px;
    transition: border-bottom-color 0.5s linear;
  }
  @media (min-width: 769px) {
    display: block;
    width: max-content;
    margin: 0;
    padding: 0;
    .active-tab {
      border-bottom: none;
      border-left-color: ${(props) =>
        props.theme.filter === false ? props.theme.fc : props.theme.overlay};
      border-left-style: solid;
      border-left-width: 2px;
      transition: all 0.5s ease;
      span {
        color: ${(props) =>
          props.theme.filter === false ? props.theme.fc : props.theme.overlay};
      }
    }
  }
`;

export const StyledJobTab = styled.button`
  align-items: center;
  appearance: auto;
  background-color: rgba(0, 0, 0, 0);
  border-top-color: ${(props) => props.theme.icon};
  border-top-style: none;
  border-right-color: ${(props) => props.theme.icon};
  border-right-style: none;
  border-bottom-color: ${(props) =>
    props.theme.filter === false ? props.theme.icon : "#495670"};
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: ${(props) => props.theme.icon};
  border-left-style: none;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-radius: 0;
  color: ${(props) => props.theme.fcSecondary};
  cursor: pointer;
  display: flex;
  font-family: "SF-Mono";
  font-size: 13px;
  height: 3.5rem;
  justify-content: center;
  min-width: 10rem;
  padding: 0 1.25rem;
  position: relative;
  text-decoration-skip-ink: auto;
  text-indent: 0px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  &:hover {
    background-color: ${(props) =>
      props.theme.filter === false
        ? props.theme.icon
        : props.theme.bgSecondary};
    span {
      color: ${(props) =>
        props.theme.filter === false ? props.theme.fc : props.theme.overlay};
    }
  }
  @media (min-width: 769px) {
    border-bottom-color: ${(props) => props.theme.overlay};
    border-bottom-style: none;
    border-left-color: ${(props) =>
      props.theme.filter === false ? props.theme.icon : "#495670"};
    border-left-style: solid;
    color: ${(props) => props.theme.overlay};
    font-size: 13px;
    height: 42px;
    padding-right: 20px;
    padding-bottom: 2px;
    padding-left: 20px;
    text-align: left;
    white-space: nowrap;
    width: 100%;
    span {
      color: ${(props) => props.theme.fcSecondary};
    }
  }
`;

export const StyledJobsHighlight = styled.div`
  background-attachment: scroll;
  background-clip: border-box;
  background-image: none;
  top: 40px;
  left: 0;
  bottom: 0;
  height: 2px;
  margin-left: 2rem;
  width: 100%;
  max-width: 120px;
  position: absolute;
  z-index: 10;
`;

export const StyledJobPanels = styled.div`
  position: relative;
  margin-left: 0;
  .active-panel {
    display: block;
  }
  @media (min-width: 769px) {
    margin-left: 20px;
    width: 100%;
  }
`;

export const StyledTabPanel = styled.div`
  h3 {
    color: ${(props) => props.theme.fc};
    font-weight: 500;
    font-size: 22px;
    margin-block-end: 0.1em;
    margin-bottom: 0.1em;
    .company {
      color: ${(props) => props.theme.icon};
      a {
        color: ${(props) => props.theme.icon};
        display: inline-block;
        position: relative;
        text-decoration: none;
        text-decoration-skip-ink: auto;
      }
    }
  }
  p {
    color: ${(props) => props.theme.fcSecondary};
    font-family: "Courier";
    font-size: 1.083333rem;
    margin-block-end: 2.083333rem;
    margin-bottom: 2.083333rem;
  }
  div {
    ul {
      list-style-type: none;
      li {
        font-family: "Calibre";
        color: ${(props) => props.theme.fcSecondary};
        margin-bottom: 10px;
        padding-left: 30px;
        position: relative;
        &:before {
          box-sizing: border-box;
          color: ${(props) => props.theme.overlay};
          content: "▹";
          left: 0;
          position: absolute;
        }
        a {
          color: ${(props) => props.theme.fcSecondary};
          text-decoration: none;
        }
      }
    }
  }
  @media (min-width: 769px) {
    height: auto;
    padding: 10px 5px;
    width: 100%;
    h3 {
      margin-block-end: 2px;
      margin-bottom: 2px;
    }
    p {
      font-size: 13px;
      margin-block-end: 25px;
      margin-bottom: 25px;
    }
    div {
      ul {
        font-size: 18px;
      }
    }
  }
  display: none;
`;

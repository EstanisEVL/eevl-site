import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fc};
  font-family: "Inter";
  font-size: 18px;
  height: auto;
  line-height: 1.3;
  min-height: 70px;
  padding: 15px;
  opacity: 1;
  text-align: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  .hidden {
    opacity: 0;
  }
`;

export const StyledFooterSocials = styled.div`
  margin: 0px auto 10px;
  max-width: 270px;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    opacity: 1;
    transition: opacity 3s ease-in;
    li {
      transition: transform 0.3s ease;
      a {
        color: ${(props) => props.theme.fcSecondary};
        display: inline-block;
        position: relative;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        padding: 10px;
        svg {
          height: 20px;
          width: 20px;
          max-width: 100%;
          vertical-align: middle;
        }
      }
      &:hover {
        transform: scale(1.3);
        a {
          color: ${(props) => props.theme.overlay};
        }
      }
    }
  }
`;

export const StyledFooterCredits = styled.div`
  font-family: "Courier";
  font-size: 12px;
  line-height: 1;
  a {
    color: ${(props) => props.theme.fcSecondary};
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    padding: 10px;
    opacity: 1;
    transition: opacity 4s ease-in;
    .footer-credits-github-stats {
      margin-top: 10px;
      .span-container {
        margin: 0 7px;
        display: inline-flex;
        align-items: center;
        -webkit-box-align: center;
        svg {
          height: 14px;
          width: 14px;
          max-width: 100%;
          margin-right: 5px;
          vertical-align: middle;
        }
        .span-counter {
          display: block;
          align-items: stretch;
        }
      }
    }
  }
`;

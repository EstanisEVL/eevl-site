import { createGlobalStyle, styled } from "styled-components";
import Calibre from "./assets/fonts/Calibre/CalibreRegular.otf";
import SFMono from "./assets/fonts/SF-Mono/SFMonoRegular.otf";
import Inter from "./assets/fonts/Inter/static/Inter-Regular.ttf";
// Global:
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Calibre";
  src: url(${Calibre});
  font-display: swap;
}

@font-face {
  font-family: "SF-Mono";
  src: url(${SFMono});
  font-display: swap,
}

@font-face {
  font-family: "Inter";
  src: url(${Inter});
  font-display: swap;
}

html {
  font-size: 12px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 1400px) {
    font-size: 22px;
  }
}
#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
body {
  @media (max-width: 480px) {
    main {
      font-family: 'Inter';
      font-size: 18px;
      line-height: 1.3;
      max-width: 1600px;
      min-height: 100vh;
      width: 100%;
      -webkit-font-smoothing: antialiased;
      padding: 0 25px;
      position: relative;
      overflow: hidden;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    main {
      padding: 0 50px;
      font-family: 'Inter';
      font-size: 20px;
      line-height: 1.3;
      max-width: 1600px;
      min-height: 100vh;
      width: 100%;
      -webkit-font-smoothing: antialiased;
    }
  }
  @media (min-width: 769px) and (max-width: 1080px) {
    main {
      padding: 0 100px;
    }
  }
  @media (min-width: 1081px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 150px;
      font-family: 'Inter';
      font-size: 20px;
      line-height: 1.3;
      min-height: 100vh;
      width: 100%;
      -webkit-font-smoothing: antialiased;
    }
  }
}
.blur {
  filter: blur(5px);
  position: fixed;
}
.hideNavbar {
  transform: translateY(-100%);
}
`;

// App
export const StyledApp = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fc};
  transition: all 0.25s ease;
`;

// Theme
export const customTheme = {
  dark: {
    bg: "#030C2E",
    bgSecondary: "#1C2C63",
    overlay: "#E2FF2D",
    fc: "#F2F3F8",
    fcSecondary: "#A0A1AB",
    icon: "#E2FF2D",
    btn: "#E2FF2D",
    hover: "rgb(100, 255, 218, 0.2)",
  },
  light: {
    bg: "#F2F3F8",
    bgSecondary: "#F2F3F8",
    overlay: "#030C2E",
    fc: "#030C2E",
    fcSecondary: "#495670",
    icon: "#A0A1AB",
    btn: "#030C2E",
    hover: "rgb(100, 255, 218, 0.2)",
    filter: false,
  },
};

// Sections
export const StyledColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
`;

export const StyledRowSection = styled.section`
  display: flex;
  user-select: none;
`;

// Containers
export const StyledRowContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "delay"
})`
  display: flex;
  align-items: center;
  gap: 2rem;
  opacity: 1;
  transition: opacity ${props => props.delay} ease-in, transform .5s ease-in;
`;

// Headers
export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.fcSecondary};
  font-family: "SF-Mono";
  font-size: clamp(14px, 5vw, 16px);
  -webkit-font-smoothing: antialiased;
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.fc};
  font-family: "Calibre";
  font-size: clamp(40px, 8vw, 60px);
  -webkit-font-smoothing: antialiased;
`;

export const StyledH3 = styled.h3`
  color: ${(props) => props.theme.fcSecondary};
  font-family: "Calibre";
  font-size: clamp(40px, 8vw, 80px);
  -webkit-font-smoothing: antialiased;
`;

export const StyledH4 = styled.h4`
  color: ${(props) => props.theme.fc};
  font-size: clamp(24px, 5vw, 2rem);
  -webkit-font-smoothing: antialiased;
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.fcSecondary};
  font-family: "Calibre";
  font-size: clamp(18px, 3vw, 20px);
  -webkit-font-smoothing: antialiased;
`;

// Lists
export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(11.5rem, 20rem));
  list-style-type: none;
  margin-block-start: 1.67rem;
`;

export default GlobalStyle;

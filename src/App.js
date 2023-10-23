import { useState } from "react";
import MobileMenuContext from "./context/MobileMenuContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/presentation/main/Main";
import NavBar from "./components/presentation/navbar/NavBar";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { customTheme, StyledApp } from "./GlobalStyle";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <MobileMenuContext>
      <ThemeProvider
        theme={theme === "light" ? customTheme.light : customTheme.dark}
      >
        <StyledApp className="App">
          <Router>
            <GlobalStyle />
            <NavBar theme={theme} setTheme={setTheme} />
            <Main />
          </Router>
        </StyledApp>
      </ThemeProvider>
    </MobileMenuContext>
  );
}

export default App;

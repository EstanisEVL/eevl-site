import MobileNavigation from "../../containers/MobileNavigation";
import Navigation from "./Navigation";
import ThemeToggler from "../buttons/ThemeToggler";
import { StyledRowContainer } from "../../../GlobalStyle";
import { StyledNavHeader, StyledNav } from "./NavBarStyles";
import { useEffect, useState } from "react";
import LanguageToggler from "../buttons/LanguageToggler";
import useWindowSize from "../../../hooks/useWindowSize";
import ThemeTogglerMobile from "../buttons/ThemeTogglerMobile";
import LanguageTogglerMobile from "../buttons/LanguageTogglerMobile";
import { useTranslation } from "react-i18next";

const NavBar = ({ theme, setTheme }) => {
  const size = useWindowSize();
  const [t, i18n] = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [showNav, setShowNav] = useState(true);

  const storageTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      storageTheme("light");
    } else {
      setTheme("dark");
      storageTheme("dark");
    }
  };

  const handleScroll = () => {
    setScrollData((prevState) => {
      return { y: window.scrollY, lastY: prevState.y };
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.y > 700) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    if (scrollData.lastY < scrollData.y) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [scrollData]);

  return (
    <StyledNavHeader className={showNav || "hideNavbar"}>
      <StyledNav>
        <StyledRowContainer
          delay={"3s"}
          className={isVisible || "hidden scroll-in"}
        >
          <a href="/" aria-label="home">
            <svg
              width="42"
              height="42"
              viewBox="0 0 282 233"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M282 164.6L248.7 170.9L233.3 99.7C232.2 94.8 230.1 91.3 226.8 89.2C225.9 88.3 224.8 87.5 223.6 86.8C219.6 84.4 215 84 209.8 85.6L159.7 100.2L156.4 89.4L207.2 74.6C211.8 73.3 215 70.9 216.7 67.4C218.5 63.9 218.6 59.8 217.1 54.9C215.5 49.8 213.1 46.4 209.7 44.7C206.3 43 202.3 42.8 197.8 44.1L147 58.9L143.6 47.9L193.4 33.4C196 32.6 198.2 31.5 200 30C201.8 28.5 203.2 26.8 204.1 24.9C205.1 23 205.6 21 205.8 18.8C206 16.6 205.7 14.4 205 12.2C203.6 7.8 201 4.4 197.1 2.1C193.2 -0.200001 188.6 -0.600001 183.4 0.899999L117.1 20.2C106.1 23.4 102.3 30.4 105.6 41.2L131.8 126.1C135.1 136.9 142.3 140.7 153.3 137.5L157.1 136.4L150.4 176.4L117 126C115.2 123.2 113 121.2 110.3 119.9C106.3 117.5 101.7 117.1 96.5 118.7L46.4 133.3L43 122.4L93.8 107.6C98.4 106.3 101.5 103.9 103.3 100.4C105.1 96.9 105.2 92.8 103.7 87.9C102.1 82.8 99.7 79.4 96.3 77.7C93 76 89 75.8 84.4 77.1L33.6 91.9L30.2 80.9L80 66.4C82.6 65.6 84.8 64.5 86.6 63C88.4 61.5 89.8 59.8 90.7 57.9C91.7 56 92.2 54 92.4 51.8C92.6 49.6 92.3 47.4 91.6 45.2C90.2 40.8 87.6 37.4 83.7 35.1C79.8 32.8 75.2 32.4 70 33.9C70 33.9 3.22238e-06 53.4 3.22238e-06 54.6C-0.0999968 70.9 3.22238e-06 99.6 3.22238e-06 99.6L18.4 159.2C21.7 170 28.9 173.8 39.9 170.6L94.9 154.6L143.8 224.9C146.6 228.9 149.8 231.4 153.4 232.3C157 233.2 160.2 233.3 163.2 232.7C170.8 231.2 175.3 226.3 176.8 218.2L194.2 125.7L203 123.1L218.4 194.6C220.8 205.6 227.6 210 239 207.7L282.1 199.2C282 177.1 282 174.7 282 164.6Z"
                fill={theme === "dark" ? "#E2FF2D" : "#1C2C63"}
              />
            </svg>
          </a>

          {size.width >= 425 ? (
            <ThemeToggler
              theme={theme}
              toggleTheme={toggleTheme}
              isVisible={isVisible}
            />
          ) : (
            <ThemeTogglerMobile
              theme={theme}
              toggleTheme={toggleTheme}
              isVisible={isVisible}
            />
          )}

          {size.width >= 425 ? <LanguageToggler /> : <LanguageTogglerMobile />}
        </StyledRowContainer>
        <div>
          <Navigation language={i18n.language} />
          <MobileNavigation language={i18n.language} />
        </div>
      </StyledNav>
    </StyledNavHeader>
  );
};

export default NavBar;

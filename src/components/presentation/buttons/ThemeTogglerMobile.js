import { useEffect, useState } from "react";
import { StyledThemeTogglerMobile } from "../navbar/NavBarStyles";
import SunIcon from "../../../assets/icons/SunIcon";
import MoonIcon from "../../../assets/icons/MoonIcon";

const ThemeTogglerMobile = ({ theme, toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(theme);

  const handleToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    if (theme === "dark") {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [theme]);
  return (
    <StyledThemeTogglerMobile>
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </StyledThemeTogglerMobile>
  );
};

export default ThemeTogglerMobile;

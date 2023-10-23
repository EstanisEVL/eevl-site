import NavLinks from "./NavLinks";
import { StyledDesktopNavigation } from "./NavBarStyles";

const Navigation = ({ language }) => {
  return (
    <StyledDesktopNavigation>
      <NavLinks language={language} />
    </StyledDesktopNavigation>
  );
};

export default Navigation;

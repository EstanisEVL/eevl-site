import React, { useContext } from "react";
import { Sling as Hamburger } from "hamburger-react";
import NavLinksMobile from "../presentation/navbar/NavLinksMobile";
import Contexts from "../../context/Contexts";
import {
  StyledMobileNavigation,
  StyledMobileHamburguer,
} from "../presentation/navbar/NavBarStyles";
import { useTheme } from "styled-components";

const MobileNavigation = ({language}) => {
  const context = useContext(Contexts.MobileMenuContext);
  const { toggle, setToggle, display } = context;
  const theme = useTheme();

  return (
    <StyledMobileNavigation>
      <StyledMobileHamburguer>
        <Hamburger
          toggled={toggle}
          toggle={setToggle}
          color={theme.icon}
          label="Show menu"
        />
        {display && <NavLinksMobile language={language} />}
      </StyledMobileHamburguer>
    </StyledMobileNavigation>
  );
};

export default MobileNavigation;

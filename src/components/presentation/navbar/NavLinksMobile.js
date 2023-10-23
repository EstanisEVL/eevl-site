import { useContext } from "react";
import Contexts from "../../../context/Contexts";
import CvButton from "../buttons/CvButton";
import { NavLinksList } from "../../utils/NavLinksList";
import {
  StyledMobileMenu,
  StyledMobileNav,
  StyledMobileOl,
  StyledMobileLi,
  StyledMobileLink,
} from "./NavBarStyles";

const NavLinksMobile = ({ language }) => {
  const context = useContext(Contexts.MobileMenuContext);
  const { closeMenu } = context;

  return (
    <>
      <StyledMobileMenu id="navlinks">
        <StyledMobileNav>
          <StyledMobileOl>
            {language === "en"
              ? NavLinksList.map((link) => {
                  return (
                    <StyledMobileLi key={link.id}>
                      <StyledMobileLink to={link.to} smooth onClick={closeMenu}>
                        {link.title}
                      </StyledMobileLink>
                    </StyledMobileLi>
                  );
                })
              : NavLinksList.map((link) => {
                  return (
                    <StyledMobileLi key={link.id}>
                      <StyledMobileLink to={link.to} smooth onClick={closeMenu}>
                        {link.titleEs}
                      </StyledMobileLink>
                    </StyledMobileLi>
                  );
                })}
          </StyledMobileOl>
          <CvButton text={language === "en" ? "Resume" : "Ver CV"} language={language}/>
        </StyledMobileNav>
      </StyledMobileMenu>
    </>
  );
};

export default NavLinksMobile;

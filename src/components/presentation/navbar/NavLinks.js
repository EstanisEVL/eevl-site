import CvButton from "../buttons/CvButton";
import { HashLink as Link } from "react-router-hash-link";
import { NavLinksList } from "../../utils/NavLinksList";
import { StyledLink, StyledNavLinks } from "./NavBarStyles";
import { useEffect, useState } from "react";

const NavLinks = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  });

  return (
    <>
      <StyledLink id="navlinks">
        <ol>
          {language === "en"
            ? NavLinksList.map((link) => {
                return (
                  <StyledNavLinks
                    key={link.id}
                    opacitydelay={`${link.id}s`}
                    transformdelay={`${link.id / 2}s`}
                    className={isVisible || "hidden scroll-in"}
                  >
                    <Link to={link.to} smooth>
                      {link.title}
                    </Link>
                  </StyledNavLinks>
                );
              })
            : NavLinksList.map((link) => {
                return (
                  <StyledNavLinks
                    key={link.id}
                    opacitydelay={`${link.id}s`}
                    transformdelay={`${link.id / 2}s`}
                    className={isVisible || "hidden scroll-in"}
                  >
                    <Link to={link.to} smooth>
                      {link.titleEs}
                    </Link>
                  </StyledNavLinks>
                );
              })}
        </ol>
        <CvButton isVisible={isVisible} text={language === "en" ?"Resume" : "Ver CV"} language={language} />
      </StyledLink>
    </>
  );
};

export default NavLinks;

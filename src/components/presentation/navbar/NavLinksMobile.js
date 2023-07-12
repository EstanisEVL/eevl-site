import { useContext } from "react";
import Contexts from "../../../utils/context/Contexts";
import CvButton from "../buttons/CvButton";
import { HashLink as Link } from "react-router-hash-link";
import { NavLinksList } from "../../utils/NavLinksList";

const NavLinksMobile = () => {
  const context = useContext(Contexts.MobileMenuContext);
  const { closeMenu } = context;

  return (
    <>
      <aside className="navbar-links" id="navlinks">
        <nav>
          <ol>
            {NavLinksList.map((link) => {
              return <li key={link.id}>
                <Link to={link.to} smooth onClick={closeMenu}>
                  {link.title}
                </Link>
              </li>;
            })}
          </ol>
          <CvButton />
        </nav>
      </aside>
    </>
  );
};

export default NavLinksMobile;

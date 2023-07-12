import CvButton from "../buttons/CvButton";
import { HashLink as Link } from "react-router-hash-link";
import { NavLinksList } from "../../utils/NavLinksList";

const NavLinks = () => {
  return (
    <>
      <div className="navbar-links" id="navlinks">
        <ol>
          {NavLinksList.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.to} smooth>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ol>
        <CvButton />
      </div>
    </>
  );
};

export default NavLinks;

import FooterCredits from "./FooterCredits";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return(
    <footer className='footer-container'>
      <FooterSocials />
      <FooterCredits />
    </footer>
  );
};

export default Footer;
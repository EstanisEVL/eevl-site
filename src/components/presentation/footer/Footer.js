import useWindowSize from "../../../hooks/useWindowSize";
import FooterCredits from "./FooterCredits";
import FooterSocials from "./FooterSocials";
import { StyledFooterContainer } from "./FooterStyles";

const Footer = ({ language }) => {
  const size = useWindowSize();
  return (
    <StyledFooterContainer>
      {size.width < 769 && <FooterSocials />}
      <FooterCredits language={language} />
    </StyledFooterContainer>
  );
};

export default Footer;

import { useContext } from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import LeftSocials from "../contact/LeftSocials";
import Projects from "../experience/Projects";
import RightEmail from "../contact/RightEmail";
import Contexts from "../../../context/Contexts";

import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

const Main = () => {
  const context = useContext(Contexts.MobileMenuContext);
  const { mainClass } = context;
  const size = useWindowSize();
  const [t, i18n] = useTranslation("global");

  return (
    <main className={mainClass}>
      <Hero />
      {size.width >= 769 && <LeftSocials />}
      {size.width >= 769 && <RightEmail />}
      <div id="1">
        <About title={t("about.header")} section={"section 1"} />
      </div>
      <div id="2">
        <Projects
          title={t("projects.header")}
          section={"section 2"}
          language={i18n.language}
          linkColor={size.width >= 769 ? "#030C2E" : "#F2F3F8"}
        />
      </div>
      <div id="3">
        <Contact title={t("contact.header")} section={"section 3"} />
      </div>
      <Footer language={i18n.language} />
    </main>
  );
};

export default Main;

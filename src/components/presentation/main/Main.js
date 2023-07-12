import React from "react";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import AboutSection from "../about/AboutSection";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import FooterTablet from "../footer/FooterTablet";
import HeroSection from "../hero/HeroSection";
import LeftSocials from "../contact/LeftSocials";
import OtherProjects from "../experience/OtherProjects";
import Projects from "../experience/Projects";
import RightEmail from "../contact/RightEmail";
// import Jobs from "../jobs/Jobs";

// ADAPTAR COMPONENTES A LAZY LOADING

const Main = () => {
  const size = useWindowSize();

  return (
    <main id="main">
      {size.width < 769 && (
        <>
          <HeroSection />
          <AboutSection />
          <Projects />
          <OtherProjects />
          <Contact />
          {/* <Jobs /> */}
          <Footer />
        </>
      )}
      {size.width >= 769 && (
        <>
          <LeftSocials />
          <RightEmail />
          <HeroSection />
          <AboutSection />
          <Projects />
          <OtherProjects />
          <Contact />
          {/* <Jobs /> */}
          <FooterTablet />
        </>
      )}
      {/* {
        size.width >= 1080 &&
        <>
        
        </>
      } */}
    </main>
  );
};

export default Main;

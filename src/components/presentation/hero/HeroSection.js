import CV from '../../../assets/cv/CV-Estanislao-Elias-Varela-Lucius-Frontend-Developer-ESP.pdf';
import { HeroSectionContent } from '../../utils/HeroSectionContent';

const HeroSection = () => {
  return(
    <section className='heroSection-container'>
      <div className='heroSection-hi'>
        <h1>{HeroSectionContent.h1}</h1>
      </div>
      <div className='heroSection-name'>
        <h2>{HeroSectionContent.h2}</h2>
      </div>
      <div className='heroSection-heading'>
        <h3>{HeroSectionContent.h3}</h3>
      </div>
      <div className='heroSection-about'>
        <p>{HeroSectionContent.p}
        </p>
      </div>
      <div className='heroSection-link'>
        <a href={ CV } target='_blank' rel='noopener noreferrer'>Check out my resume!</a>
      </div>
    </section>
  );
};

export default HeroSection;
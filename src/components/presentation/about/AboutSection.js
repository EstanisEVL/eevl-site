import useWindowSize from "../../../utils/hooks/useWindowSize";
import ProfilePic from "./ProfilePic";
import { AboutSectionContent } from "../../utils/AboutSectionContent";

const AboutSection = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width < 768 && (
        <section className="aboutSection-container" id="about">
          <h2>{AboutSectionContent.h2}</h2>
          <div className="aboutSection-inner">
            <div className="aboutSection-styledText">
              <div>
                <p>{AboutSectionContent.firstP}</p>
                <p>{AboutSectionContent.secondP}</p>
                <p>{AboutSectionContent.ThirdP}</p>
              </div>
              <ul className="aboutSection-skillList">
                {AboutSectionContent.skills.map((skill) => {
                  return <li key={skill.id}>{skill.title}</li>;
                })}
              </ul>
            </div>
          </div>
          <ProfilePic />
        </section>
      )}
      {size.width >= 769 && (
        <section className="aboutSection-container" id="about">
          <h2>{AboutSectionContent.h2}</h2>
          <div className="aboutSection-inner">
            <div className="aboutSection-styledText">
              <div>
                <p>{AboutSectionContent.firstP}</p>
                <p>{AboutSectionContent.secondP}</p>
                <p>{AboutSectionContent.ThirdP}</p>
              </div>
              <ul className="aboutSection-skillList">
                {AboutSectionContent.skills.map((skill) => {
                  return <li key={skill.id}>{skill.title}</li>;
                })}
              </ul>
            </div>
            <ProfilePic />
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSection;

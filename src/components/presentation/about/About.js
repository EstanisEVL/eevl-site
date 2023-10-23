import ProfilePic from "./ProfilePic";
import { AboutSectionContent } from "../../utils/AboutSectionContent";
import {
  StyledAboutSection,
  StyledAboutDiv,
  StyledAboutP,
  StyledAboutUl,
  StyledAboutInnerDiv,
} from "./AboutStyles";
import { StyledHeader } from "../headers/StyledHeader";
import useObserver from "../../../hooks/useObserver";
import { useTranslation } from "react-i18next";

const About = ({ title, section }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  const [t] = useTranslation("global");
  return (
    <>
      <StyledAboutSection ref={fromRef} id="about">
        <StyledHeader
          section={section}
          className={isIntersecting ? "" : "hidden" }
          delay={"2s"}
        >
          {title}
        </StyledHeader>
        <StyledAboutInnerDiv>
          <div className="content-div">
            <StyledAboutDiv>
              <StyledAboutP className={isIntersecting ? "" : "hidden"} delay={"2.5s"}>
                {t("about.firstP")}
              </StyledAboutP>
              <StyledAboutP className={isIntersecting ? "" : "hidden"} delay={"3.5s"}>
                {t("about.secondP")}
              </StyledAboutP>
              <StyledAboutP className={isIntersecting ? "" : "hidden"} delay={"4.5s"}>
                {t("about.ThirdP")}
              </StyledAboutP>
              <StyledAboutUl className={isIntersecting ? "" : "hidden"} delay={"5.5s"}>
                {AboutSectionContent.skills.map((skill) => {
                  return <li key={skill.id}>{skill.title}</li>;
                })}
              </StyledAboutUl>
            </StyledAboutDiv>
          </div>
          <ProfilePic />
        </StyledAboutInnerDiv>
      </StyledAboutSection>
    </>
  );
};

export default About;

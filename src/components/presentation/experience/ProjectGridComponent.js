import useObserver from "../../../hooks/useObserver";
import {
  StyledProjectAnchor,
  StyledProjectDescription,
  StyledProjectOverline,
  StyledProjectTechList,
  StyledProjectTitle,
  StyledProjectsGrid,
  StyledProjectsLinks,
} from "./ProjectsStyles";

const ProjectGridComponent = ({ project, language, linkColor }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  return (
    <StyledProjectsGrid ref={fromRef}>
      <div>
        <StyledProjectOverline
          className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"2s"}
        >
          {language === "en" ? project.type : project.typeEs}
        </StyledProjectOverline>
        <StyledProjectTitle className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"3s"}>
          <StyledProjectAnchor
            href={project.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.title}
          </StyledProjectAnchor>
        </StyledProjectTitle>

        <StyledProjectDescription className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"3s"}>
          <p>{ language === "en" ? project.description : project.descriptionEs }</p>
          <StyledProjectTechList>
            {project.techs.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </StyledProjectTechList>
        </StyledProjectDescription>

        <StyledProjectsLinks className={isIntersecting ? "" : "hidden scroll-in"}
          delay={"4s"}
          linkColor={linkColor}
          >
          <a
            href={project.repo}
            aria-label="GitHub Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href={project.href}
            aria-label="External Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </StyledProjectsLinks>
      </div>
    </StyledProjectsGrid>
  );
};

export default ProjectGridComponent;

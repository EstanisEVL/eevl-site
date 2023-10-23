import useObserver from "../../../hooks/useObserver";
import { OtherProjectsList } from "../../utils/OtherProjectsList";
import { StyledButton } from "../buttons/ButtonStyles";
import {
  StyledOtherProjectsSection,
  StyledOtherProjectsH2,
  StyledArchiveLink,
  StyledOtherProjectsGrid,
} from "./OtherProjectsStyles";

const OtherProjects = ({ title, language }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  return (
    <StyledOtherProjectsSection ref={fromRef}>
      <StyledOtherProjectsH2
        className={isIntersecting ? "" : "hidden"}
        delay={"2s"}
      >
        {title}
      </StyledOtherProjectsH2>

      <StyledArchiveLink
        href="/archive"
        className={isIntersecting ? "" : "hidden scroll-in"}
        delay={"3s"}
      >
        {language === "en" ? "view the archive" : "ver archivo"}
      </StyledArchiveLink>

      <StyledOtherProjectsGrid className={isIntersecting ? "" : "hidden scroll-in"} delay={"3s"}>
        {OtherProjectsList.map((project) => {
          return (
            <li className="styled-link" key={project.id}>
              <div>
                <header>
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>

                    <div>
                      <a href={project.href}>
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
                    </div>
                  </div>

                  <h3>
                    <a href={project.href}>{language === "en" ? project.title : project.titleEs}</a>
                  </h3>

                  <div>
                    <p>{language === "en" ? project.description : project.descriptionEs}</p>
                  </div>
                </header>

                <div>
                  <ul>
                    {project.techs.map((tech) => {
                      return <li key={tech.id}>{tech.title}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </StyledOtherProjectsGrid>

      {/* AGREGAR FUNCIONALIDAD AL BOTÓN O REEMPLAZAR POR INFINITE SCROLLING */}
      <StyledButton padding={"20px 28px"} className={isIntersecting ? "" : "hidden scroll-in"}>{language === "en" ? "Show More" : "Ver más"}</StyledButton>
    </StyledOtherProjectsSection>
  );
};

export default OtherProjects;

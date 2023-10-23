import useObserver from "../../../hooks/useObserver";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase.js";

import { StyledHeader } from "../headers/StyledHeader";
import ProjectGridComponent from "./ProjectGridComponent";
import ProjectImgComponent from "./ProjectImgComponent";
import {
  StyledProjectsListItem,
  StyledProjectsSection,
} from "./ProjectsStyles";
import { useEffect, useState } from "react";
import { StyledP } from "../../../GlobalStyle";

const Projects = ({ title, section, language, linkColor }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const ProjectList = collection(db, "projects");

    getDocs(ProjectList).then((snapshot) => {
      if (snapshot.size === 0) {
        setProjects([]);
      } else {
        setProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    });
  }, []);

  return (
    <StyledProjectsSection id="projects" ref={fromRef}>
      <StyledHeader
        section={section}
        className={isIntersecting ? "" : "hidden"}
        delay={"2s"}
      >
        {title}
      </StyledHeader>
      <ul>
        {projects ? (
          projects?.map((project) => {
            return (
              <StyledProjectsListItem key={project.id}>
                <ProjectGridComponent project={project} language={language} linkColor={linkColor} />
                <ProjectImgComponent project={project} />
              </StyledProjectsListItem>
            );
          })
        ) : (
          <StyledP>{language === "en" ? "No projects found." : "No se encontraron proyectos."}</StyledP>
        )}
      </ul>
      <div></div>
    </StyledProjectsSection>
  );
};

export default Projects;

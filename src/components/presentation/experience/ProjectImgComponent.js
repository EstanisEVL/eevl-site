import useObserver from "../../../hooks/useObserver";
import { StyledProjectImg } from "./ProjectsStyles";

const ProjectImgComponent = ({ project }) => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });
  return (
    <StyledProjectImg ref={fromRef}>
      <a
        href={project.href}
        rel="noorpener noreferrer"
        target="_blank"
        className={isIntersecting ? "" : "hidden scroll-in"}
      >
        <div>
          <div>
            <img
              alt="presentation"
              src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
            />
          </div>
          <picture>
            <source type="image/png" srcSet={project.img} />
            <img alt={project.title} src={project.img} />
          </picture>
          <noscript></noscript>
        </div>
      </a>
    </StyledProjectImg>
  );
};

export default ProjectImgComponent;

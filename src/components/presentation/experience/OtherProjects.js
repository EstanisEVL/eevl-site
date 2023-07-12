import { OtherProjectsList } from "../../utils/OtherProjectsList";

const OtherProjects = () => {
  return (
    <section className="other-projects-section">
      <h2>Other Noteworthy Projects</h2>
      <a className="archive-link" href="/archive">
        view the archive
      </a>
      <ul className="other-projects-grid">
        {OtherProjectsList.map((project) => {
          return (
            <li key={project.id} className="other-projects-list-item">
              <div className="other-projects-inner">
                <header>
                  <div className="other-project-top">
                    <div className="folder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-folder"
                      >
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="project-links">
                      <a className="external-link" href={project.href}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href={project.href}>{project.title}</a>
                  </h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                </header>
                <footer>
                  <ul className="project-tech-list">
                    {project.techs.map((tech) => {
                      return <li key={tech.id}>{tech.title}</li>;
                    })}
                  </ul>
                </footer>
              </div>
            </li>
          );
        })}
      </ul>
      {/* AGREGAR FUNCIONALIDAD AL BOTÓN Y MOVER A COMPONENTES/BOTONES */}
      <button className="show-more-btn">Show More</button>
    </section>
  );
};

export default OtherProjects;

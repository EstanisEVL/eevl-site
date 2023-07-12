const JobPanels = ({ panels, toggleState, toggleTab }) => {
  return (
    <div className="job-panels">
      {panels.map((panel) => {
        return (
          <div
            id={panel.panelId}
            className={
              toggleState === panel.id ? "tab-panel active-panel" : "tab-panel"
            }
            onClick={() => {
              toggleTab(panel.id);
            }}
          >
            <h3>
              <span>{panel.job}</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href={panel.href}
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {panel.title}
                </a>
              </span>
            </h3>
            <p className="range">{panel.range}</p>
            <div>
              <ul>
                {panel.tasks.map((task) => {
                  return <li key={task.id}>{task.text}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobPanels;

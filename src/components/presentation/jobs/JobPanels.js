import { StyledJobPanels, StyledTabPanel } from "./JobsStyles";

const JobPanels = ({ panels, toggleState, toggleTab, language }) => {
  return (
    <StyledJobPanels>
      {panels.map((panel) => {
        return (
          <StyledTabPanel
            key={panel.id}
            id={panel.panelId}
            className={toggleState === panel.id && "active-panel"}
            onClick={() => {
              toggleTab(panel.id);
            }}
          >
            <h3>
              <span>{language === "en" ? panel.job : panel.jobEs}</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a href={panel.href} rel="noopener noreferrer" target="_blank">
                  {panel.title}
                </a>
              </span>
            </h3>
            <p>{language === "en" ? panel.range : panel.rangeEs}</p>
            <div>
              <ul>
                {panel.tasks.map((task) => {
                  return <li key={task.id}>{language === "en" ? task.text : task.textEs}</li>;
                })}
              </ul>
            </div>
          </StyledTabPanel>
        );
      })}
    </StyledJobPanels>
  );
};

export default JobPanels;

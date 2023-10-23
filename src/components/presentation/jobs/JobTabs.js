import {
  StyledJobsTabs,
  StyledJobTab,
  StyledJobsHighlight,
} from "./JobsStyles";

const JobTabs = ({ tabs, toggleTab, toggleState }) => {
  return (
    <StyledJobsTabs role="tablist" aria-label="job tabs">
      {tabs.map((tab) => {
        return (
          <StyledJobTab
            key={tab.id}
            className={toggleState === tab.id && "active-tab"}
            id="tab0"
            role="tab"
            tabIndex={String(tab.id)}
            onClick={() => toggleTab(tab.id)}
          >
            <span>{tab.title}</span>
          </StyledJobTab>
        );
      })}
      <StyledJobsHighlight></StyledJobsHighlight>
    </StyledJobsTabs>
  );
};

export default JobTabs;

const JobTabs = ({ tabs, toggleTab, toggleState }) => {
  return (
    <div role="tablist" aria-label="job tabs" className="jobs-tab-list">
      {tabs.map((tab) => {
        return (
          <button
            key={tab.id}
            className={
              toggleState === tab.id ? "job-tab active-tab" : "job-tab"
            }
            id="tab0"
            role="tab"
            tabIndex={String(tab.id)}
            onClick={() => toggleTab(tab.id)}
          >
            <span>{tab.title}</span>
          </button>
        );
      })}
      <div className="jobs-styled-highlight"></div>
    </div>
  );
};

export default JobTabs;

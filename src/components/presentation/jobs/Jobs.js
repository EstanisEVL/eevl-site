import { useState } from "react";
import { JobsTabs, JobsPanels } from "../../utils/JobsList";
import JobTabs from "./JobTabs";
import JobPanels from "./JobPanels";

const Jobs = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="jobs" className="jobs-container">
      <h2>Where I've Worked</h2>
      <div className="jobs-inner">
        <JobTabs
          tabs={JobsTabs}
          toggleTab={toggleTab}
          toggleState={toggleState}
        />
        <JobPanels
          panels={JobsPanels}
          toggleState={toggleState}
          toggleTab={toggleTab}
        />
      </div>
    </section>
  );
};

export default Jobs;

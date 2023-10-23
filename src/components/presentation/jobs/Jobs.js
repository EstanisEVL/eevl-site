import { useState } from "react";
import { JobsTabs, JobsPanels } from "../../utils/JobsList";
import JobTabs from "./JobTabs";
import JobPanels from "./JobPanels";
import { StyledJobsSection } from "./JobsStyles";
import { StyledHeader } from "../headers/StyledHeader";
import useObserver from "../../../hooks/useObserver";

const Jobs = ({ section, title, language }) => {
  const [toggleState, setToggleState] = useState(0);
  const { isIntersecting, fromRef } = useObserver({ treshold: 1 });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <StyledJobsSection id="jobs" ref={fromRef}>
      <StyledHeader
        section={section}
        className={isIntersecting ? "" : "hidden scroll-in"}
        delay={"2s"}
      >
        {title}
      </StyledHeader>
      <div className={isIntersecting ? "inner" : "inner hidden"}>
        <JobTabs
          tabs={JobsTabs}
          toggleTab={toggleTab}
          toggleState={toggleState}
        />
        <JobPanels
          panels={JobsPanels}
          toggleState={toggleState}
          toggleTab={toggleTab}
          language={language}
        />
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;

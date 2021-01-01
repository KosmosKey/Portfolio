import React from "react";
import { Button } from "@material-ui/core";
import Skills from "./Skills";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Dashboard__ButtonSelectors">
        <Button>Projects</Button>
        <Button className="Dashboard__ButtonSkills">Skills</Button>
        <Button>About</Button>
      </div>
      {/* <Skills /> */}
      <Projects />
    </div>
  );
};

export default Dashboard;

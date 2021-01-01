import React from "react";
import { Button } from "@material-ui/core";
import Skills from "./Skills";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Dashboard__ButtonSelectors">
        <Button>Projects</Button>
        <Button className="Dashboard__ButtonSkills">Skills</Button>
        <Button>About</Button>
      </div>
      <Skills />
    </div>
  );
};

export default Dashboard;

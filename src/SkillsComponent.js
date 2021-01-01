import React from "react";
import { Grid } from "@material-ui/core";

const SkillsComponent = ({ paragraphTechnology, children }) => {
  return (
    <Grid item lg={3} md={4} sm={4} xs={12} className="SkillComponent">
      <div className="SkillComponent__ChildrenDiv">
        {children}
        <p>{paragraphTechnology}</p>
      </div>
    </Grid>
  );
};

export default SkillsComponent;

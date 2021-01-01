import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";

const ProjectComponent = ({ image, paragraph, children, title }) => {
  return (
    <Fragment>
      <Grid item lg={6} md={6} className="ProjectComponent">
        <div className="Project__Image">
          <img src={image} alt={image} />
        </div>
      </Grid>
      <Grid item lg={6} md={6} className="ProjectComponent">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        {children}
      </Grid>
    </Fragment>
  );
};

export default ProjectComponent;

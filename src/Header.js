import { Button } from "@material-ui/core";
import React from "react";
import image from "./images/pfp.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__InformationName">
        <img src={image} alt="" />
        <p className="Header__Junior">Hey,</p>
        <h1>I'm Magomed Khamidov</h1>
        <p className="Header__paragraph">
          I'm a Junior Full stack developer. Full stack developer with over 1
          year of experience in coding and making web applications. Love working
          with React JS and latest technologies ⚛️.
        </p>
        <div className="Header__InformationName_Buttons">
          <Button className="Header__GitHubButton">
            GitHub <GitHubIcon />
          </Button>
          <Button className="Header__DownloadResume">
            Download Resume <GetAppIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

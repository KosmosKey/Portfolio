import { Button } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const NavigationBar = () => {
  return (
    <nav>
      <h1>Magomed Khamidov</h1>
      <div className="NavigationBar__SocialMediaButtons">
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <TwitterIcon />
        </Button>
        <Button>
          <YouTubeIcon />
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;

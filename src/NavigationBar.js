import React from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { GitHub } from "@material-ui/icons";

const NavigationBar = () => {
  return (
    <nav>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Magomed Khamidov
      </motion.h1>
      <motion.div
        className="NavigationBar__SocialMediaButtons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="https://github.com/KosmosKey">
          <Button>
            <GitHub />
          </Button>
        </a>
        <a href="https://twitter.com/KosmosDeveloper">
          <Button>
            <TwitterIcon />
          </Button>
        </a>

        <a href="https://www.youtube.com/channel/UCC0nd4ub4bFxIFxWoO2H1kA">
          <Button>
            <YouTubeIcon />
          </Button>
        </a>
      </motion.div>
    </nav>
  );
};

export default NavigationBar;

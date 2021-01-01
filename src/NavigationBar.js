import React from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

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
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <TwitterIcon />
        </Button>
        <Button>
          <YouTubeIcon />
        </Button>
      </motion.div>
    </nav>
  );
};

export default NavigationBar;

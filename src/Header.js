import React from "react";
import { Button } from "@material-ui/core";
import image from "./images/pfp.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import WordDocument from "./images/Resume.docx";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="Header">
      <motion.div
        className="Header__InformationName"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="header" />
        <div className="Header__TextH1">
          <p className="Header__Junior">Hey,</p>
          <h1>I'm Magomed Khamidov</h1>
        </div>
        <p className="Header__paragraph">
          I'm a Full stack developer. Developer with over 2 years of
          experience in coding and making web applications. Love working with
          React JS and latest technologies ⚛️.
        </p>
        <div className="Header__InformationName_Buttons">
          <a
            href="https://github.com/KosmosKey"
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Button className="Header__GitHubButton">
              GitHub <GitHubIcon />
            </Button>
          </a>
          <a
            href={WordDocument}
            download
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Button className="Header__DownloadResume">
              Download Resume <GetAppIcon />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

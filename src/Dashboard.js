import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [numberState, setNumberState] = useState(0);

  return (
    <div className="Dashboard">
      <motion.div
        className="Dashboard__ButtonSelectors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          onClick={() => setNumberState(0)}
          style={numberState === 0 ? { borderBottom: "2px solid #211c28" } : {}}
        >
          Projects
        </Button>
        <Button
          className="Dashboard__ButtonSkills"
          onClick={() => setNumberState(1)}
          style={numberState === 1 ? { borderBottom: "2px solid #211c28" } : {}}
        >
          Skills
        </Button>
        <Button
          onClick={() => setNumberState(2)}
          style={numberState === 2 ? { borderBottom: "2px solid #211c28" } : {}}
        >
          About
        </Button>
        <Button
          className="Dashboard__Contact"
          onClick={() => setNumberState(3)}
          style={numberState === 3 ? { borderBottom: "2px solid #211c28" } : {}}
        >
          Contact
        </Button>
      </motion.div>

      {numberState === 0 && <Projects />}
      {numberState === 1 && <Skills />}
      {numberState === 2 && <About />}
      {numberState === 3 && <Contact />}
    </div>
  );
};

export default Dashboard;

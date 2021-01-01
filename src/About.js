import React from "react";
import imageProfile from "./images/Image.jpg";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";

const About = () => {
  const matches = useMediaQuery("(max-width:959px)");

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className="About">
        <h1 className="About__H1">About Me</h1>
        <h3 className="About__paragraph">Take a look about me.</h3>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          spacing={!matches ? 10 : 5}
        >
          <Grid item lg={6}>
            <div className="About__ImageDv">
              <img src={imageProfile} alt="profiler" />
            </div>
          </Grid>
          <Grid item lg={6}>
            <h1>Hey!</h1>
            <p>
              I am 18 years old live in Norway, Bergen. I am a Junior Full Stack
              developer with over 1 year experience in coding.
            </p>
            <p>
              I started coding recently when i went to college by going to an
              online bootcamp for 3 months. The online bootcamp was called
              ITGENIO, it is an education programming school with 3 month
              program.
            </p>
            <p>
              I started Learning HTML, CSS and JavaScript in 4 months. Later i
              picked React JS as a front end library and started doing small
              projects. Later on i turned into full stack development with MERN.
            </p>
            <p>
              I always look for learning as much as i can with new and
              interesting technologies. Always trying to problem solve and look
              for new ideas into development.
            </p>
            <p>
              However, at the moment i am looking for to work in company to gain
              more experience into Front End / Full Stack development. I really
              want to work with a team, learn, work with clients and make
              applications for companies.
            </p>
            <p>
              My goal in the future is being a very high experienced developer
              and making big application projects. I always practice my skills
              day by day in order to be a better developer.
            </p>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default About;

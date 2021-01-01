import React from "react";
import DynoBook from "./images/DynoBook.png";
import HobbyMaker from "./images/HobbyMaker.png";
import WaWork from "./images/wa.work.png";
import ColorKeys from "./images/ColorKeys.png";
import Freelancer from "./images/Freelancer.png";
import Photographer from "./images/Photographer.png";
import Cupcake from "./images/Cupcake.png";
import Gradley from "./images/Gradley.ng.png";
import TimeTrakcer from "./images/Time-Tracker.png";
import MernTodo from "./images/MERNStack.png";
import ChatApplication from "./images/ChatApplication.png";
import { Button, Container, Grid, useMediaQuery } from "@material-ui/core";
import ProjectComponent from "./ProjectComponent";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { motion } from "framer-motion";
const Projects = () => {
  const matches = useMediaQuery("(max-width:959px)");

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className="Projects">
        <h1 className="Projects__Title">Projects</h1>
        <p className="Projects__Paragraph">
          have a look at some of my projects.
        </p>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          spacing={!matches ? 10 : 3}
        >
          <ProjectComponent
            paragraph="Full Stack Social Media Web Application. This project includes Authentication, Authorization and Realtime Database. You can post posts with images, follow, comment, add your own trends and upload profile picture just like social media."
            image={DynoBook}
            title="DynoBook"
          >
            <h2>Technologies used: MERN STACK + Firebase ⚛️ 🔥</h2>
            <div className="Project__Buttons">
              <a
                href="https://dyno-book.com/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/DynoBook"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="MERN Stack web application. This project allows you to add a hobby and see which hobbies went bad / good. You will have your own statistic of hobbies with Chart when you make account and log in. You can chat with other people about your hobbies in the chat system."
            image={HobbyMaker}
            title="HobbyMaker"
          >
            <h2>Technologies used: MERN STACK ⚛️</h2>
            <div className="Project__Buttons">
              <a
                href="https://hobbymaker.netlify.app/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/HobbyMaker"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="Chat Web application built with React JS and Firebase. Chat application project allows you to make your own room and post your own messages in those rooms. You can chat with people and discuss together in chat rooms."
            image={ChatApplication}
            title="Chat Application"
          >
            <h2>Technologies used: React JS + Firebase ⚛️ 🔥</h2>
            <div className="Project__Buttons">
              <a
                href="https://chatapplication-725aa.web.app/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/Chat_Application"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="This is Front End Development ONLY! I used React JS, React Router and React Hooks. This is one of my first project i did when started learning React JS. This project includes algorithm for the timer and make a todo for the time."
            image={TimeTrakcer}
            title="Time Tracker"
          >
            <h2>Technologies used: React JS ⚛️</h2>
            <div className="Project__Buttons">
              <a
                href="https://timereactjs.netlify.app/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/TimeTracker"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="This is my first project with MERN Stack. You can post a TODO, delete and edit. This is a application which just communicates with backend and front end. This project alos uses REST API's."
            image={MernTodo}
            title="MERN Todo Application"
          >
            <h2>Technologies used: MERN Stack ⚛️</h2>
            <div className="Project__Buttons">
              <a
                href="https://fullstackapplication.herokuapp.com/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/FullStack_App"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="This is a freelancer website with Front end development ONLY. I had a client on upwork who wanted to make a website like this. I used JQuery and JavaScript for this project. This is one of my first ever projects when i started with javascript. Unfortunately it is not live, but you can check the GitHub repo code."
            image={Freelancer}
            title="Freelance web (Jquery)"
          >
            <h2>Technologies used: HTML, CSS and JavaScript (Jquery)</h2>
            <div className="Project__Buttons">
              <a
                href="https://github.com/KosmosKey/Freelance-web-application-JavaScript-JQuery-"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  className="Project__GitHubButton"
                  style={{ marginLeft: "0px" }}
                >
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="Made a technical test project for wa.work (wide assessment). They gave me a design and instructions and i had to turn it into an small application. It is not live, but you can see my code repository."
            image={WaWork}
            title="Wa.work (Technical test)"
          >
            <h2>Technologies used: React JS / React Hooks</h2>
            <div className="Project__Buttons">
              <a
                href="https://github.com/KosmosKey/Wa.work"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  className="Project__GitHubButton"
                  style={{ marginLeft: "0px" }}
                >
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="Gradley.ng is a company who wanted to have me on a technical test in HTML, CSS and JavaScript. They needed a support center page with fully responsive design."
            image={Gradley}
            title="Gradley.ng (Technical)"
          >
            <h2>Technologies used: HTML, CSS and JavaScript</h2>
            <div className="Project__Buttons">
              <a
                href="https://gradleytest.netlify.app/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/Gradley.ng"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="One of my first javascript projects. Added javascript functionality into the website. Add to basket and remove from basket. Also used HTML and CSS flexbox."
            image={Cupcake}
            title="Cupcake Store (JavaScript)"
          >
            <h2>Technologies used: HTML, CSS and JavaScript</h2>
            <div className="Project__Buttons">
              <a
                href="https://cupcakestore.netlify.app/index.html"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/JavaScript-and-Firebase-Cupcake-store"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="A JavaScript project for learning kids how to do touch typing in website. Project was done for the company called ITGENIO and they asked me to do this project for them. I used a lot of javascript functionality such as event listeneres, if / else and loops. It also has english version and russian version."
            image={ColorKeys}
            title="Color The Keys"
          >
            <h2>Technologies used: HTML, CSS and JavaScript</h2>
            <div className="Project__Buttons">
              <a
                href="https://ludmilaiv.github.io/Keyboard-game/color-keys/Welcome-english.html"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/Keyboard-game/tree/master/Project%20FLESH"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
          <ProjectComponent
            paragraph="Simple website made for a photographer Johnny Rivera. My first ever client on front end development. Just used HTML, CSS and Bootstrap for Grid. He also wanted form for sending messages which is included in the website"
            image={Photographer}
            title="Photographer Website"
          >
            <h2>Technologies used: HTML and CSS</h2>
            <div className="Project__Buttons">
              <a
                href="https://riveraphoto.netlify.app/"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__WebsiteButton">
                  Website
                  <LanguageIcon />
                </Button>
              </a>
              <a
                href="https://github.com/KosmosKey/Website-for-Jonathan-Rivera"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button className="Project__GitHubButton">
                  GitHub Repo
                  <GitHubIcon />
                </Button>
              </a>
            </div>
          </ProjectComponent>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;

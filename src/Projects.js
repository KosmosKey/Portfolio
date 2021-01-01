import React from "react";
import DynoBook from "./images/DynoBook.png";
import HobbyMaker from "./images/HobbyMaker.png";
import ColorKeys from "./images/ColorKeys.png";
import Freelancer from "./images/Freelancer.png";
import Photographer from "./images/Photographer.png";
import Cupcake from "./images/Cupcake.png";
import Gradley from "./images/Gradley.ng.png";
import TimeTrakcer from "./images/Time-Tracker.png";
import MernTodo from "./images/MERNStack.png";
import ChatApplication from "./images/ChatApplication.png";
import { Button, Container, Grid } from "@material-ui/core";
import ProjectComponent from "./ProjectComponent";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
const Projects = () => {
  return (
    <Container className="Projects">
      <Grid container justify="center" alignItems="flex-start" spacing={10}>
        <ProjectComponent
          paragraph="Full Stack Social Media Web Application. This project includes Authentication, Authorization and Realtime Database. You can post posts with images, follow, comment, add your own trends and upload profile picture just like social media."
          image={DynoBook}
          title="DynoBook"
        >
          <h2>Technologies used: MERN STACK + Firebase ⚛️ 🔥</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="MERN Stack web application. This project allows you to add a hobby and see which hobbies went bad / good. You will have your own statistic of hobbies with Chart when you make account and log in. You can chat with other people about your hobbies in the chat system."
          image={HobbyMaker}
          title="HobbyMaker"
        >
          <h2>Technologies used: MERN STACK ⚛️</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="Chat Web application built with React JS and Firebase. Chat application project allows you to make your own room and post your own messages in those rooms. You can chat with people and discuss together in chat rooms."
          image={ChatApplication}
          title="Chat Application"
        >
          <h2>Technologies used: React JS + Firebase ⚛️ 🔥</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="This is Front End Development ONLY! I used React JS, React Router and React Hooks. This is one of my first project i did when started learning React JS. This project includes algorithm for the timer and make a todo for the time."
          image={TimeTrakcer}
          title="Time Tracker"
        >
          <h2>Technologies used: React JS ⚛️</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="This is my first project with MERN Stack. You can post a TODO, delete and edit. This is a application which just communicates with backend and front end. This project alos uses REST API's."
          image={MernTodo}
          title="MERN Todo Application"
        >
          <h2>Technologies used: MERN Stack ⚛️</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="This is a freelancer website with Front end development ONLY. I had a client on upwork who wanted to make a website like this. I used JQuery and JavaScript for this project. This is one of my first ever projects when i started with javascript. Unfortunately it is not live, but you can check the GitHub repo code."
          image={Freelancer}
          title="Freelance web (Jquery)"
        >
          <h2>Technologies used: HTML, CSS and JavaScript (Jquery)</h2>
          <div className="Project__Buttons">
            <Button
              className="Project__GitHubButton"
              style={{ marginLeft: "0px" }}
            >
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="Gradley.ng is a company who wanted to have me on a technical test in HTML, CSS and JavaScript. They needed a support center page with fully responsive design."
          image={Gradley}
          title="Gradley.ng (Technical)"
        >
          <h2>Technologies used: HTML, CSS and JavaScript</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="One of my first javascript projects. Added javascript functionality into the website. Add to basket and remove from basket. Also used HTML and CSS flexbox."
          image={Cupcake}
          title="Cupcake Store (JavaScript)"
        >
          <h2>Technologies used: HTML, CSS and JavaScript</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="A JavaScript project for learning kids how to do touch typing in website. Project was done for the company called ITGENIO and they asked me to do this project for them. I used a lot of javascript functionality such as event listeneres, if / else and loops. It also has english version and russian version."
          image={ColorKeys}
          title="Color The Keys"
        >
          <h2>Technologies used: HTML, CSS and JavaScript</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
        <ProjectComponent
          paragraph="Simple website made for a photographer Johnny Rivera. My first ever client on front end development. Just used HTML, CSS and Bootstrap for Grid. He also wanted form for sending messages which is included in the website"
          image={Photographer}
          title="Photographer Website"
        >
          <h2>Technologies used: HTML and CSS</h2>
          <div className="Project__Buttons">
            <Button className="Project__WebsiteButton">
              Website
              <LanguageIcon />
            </Button>
            <Button className="Project__GitHubButton">
              GitHub Repo
              <GitHubIcon />
            </Button>
          </div>
        </ProjectComponent>
      </Grid>
    </Container>
  );
};

export default Projects;

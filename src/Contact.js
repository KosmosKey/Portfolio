import React from "react";
import { Container } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className="Contact">
        <h1 className="Contact__H1">Contact Me</h1>
        <p className="Contact__CallParagraph">Call me or send me an email.</p>

        <div className="Contact__Div">
          <div className="Contact__Email">
            <EmailIcon />
            <p>mago.khamidov@gmail.com</p>
          </div>

          <div className="Contact__Phone">
            <PhoneIcon />
            <p>+47 939 32 426</p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;

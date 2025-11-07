import React from "react";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

const About = () => {
  return (
    <>
      {/* Header: animated section title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Animated paragraph describing skills */}
      <motion.p
        // Applying fadeIn animation with specific parameters
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi! I am a full-stack developer passionate about building scalable,
        user-focused web applications with Java, Spring Boot, and React. I enjoy
        turning ideas into functional, impactful solutions — let's create
        something amazing together!
      </motion.p>
    </>
  );
};

export default About;

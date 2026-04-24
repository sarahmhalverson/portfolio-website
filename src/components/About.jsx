import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={profileImg} alt="Sarah Halverson" className="about-image" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="about-label">about me</p>
          <h2 className="about-heading">hi, i'm sarah.</h2>
          <p className="about-bio">
            I'm a front-end developer based in San Antonio, TX, currently making 
            my way into the world of data analysis. I love finding patterns, 
            asking questions that don't have obvious answers, and building things 
            that actually make sense to people
          </p>
          <p className="about-bio">
            When I'm not coding or digging through data, you'll probably find me 
            playing with my cat, reading a book, or outside in nature
          </p>
          <div className="about-links">
            <a href="#projects">see my work ↓</a>
            <a href="mailto:sarahmhalve@gmail.com">get in touch</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
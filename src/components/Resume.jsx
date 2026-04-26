import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">

        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="resume-label">resume</p>
          <h2 className="resume-heading">take your pick.</h2>
          <p className="resume-subtext">
            i'm a developer with a growing passion for data. download whichever is most relevant to you.
          </p>
        </motion.div>

        <motion.div
          className="resume-cards"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="resume-card">
            <p className="resume-card-label">where i'm going</p>
            <h3 className="resume-card-title">Data Analyst</h3>
            <p className="resume-card-description">
              Focused on data analysis, visualization, and storytelling. For roles in analytics, business intelligence, and data.
            </p>
            <a href="/SarahHalversonResumeData.pdf" download className="resume-btn resume-btn-dark">
              download ↓
            </a>
          </div>

          <div className="resume-card">
            <p className="resume-card-label">where i've been</p>
            <h3 className="resume-card-title">Front-End Developer</h3>
            <p className="resume-card-description">
              Focused on building web interfaces and user experiences. For roles in front-end development and web engineering.
            </p>
            <a href="/SarahHalversonResumeFrontEnd.pdf" download className="resume-btn resume-btn-outline">
              download ↓
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
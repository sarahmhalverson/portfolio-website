import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="footer-top">
          <h2 className="footer-heading">let's connect.</h2>
          <p className="footer-subtext">
            always open to new opportunities, collaborations, or just a good conversation.
          </p>
          <a href="mailto:sarahmhalve@gmail.com" className="footer-email">
            sarahmhalverson@gmail.com
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-name">sarah halverson</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/sarahmhalverson" target="_blank" rel="noreferrer">linkedin</a>
            <a href="https://github.com/sarahmhalverson" target="_blank" rel="noreferrer">github</a>
            <a href="mailto:sarahmhalve@gmail.com">email</a>
          </div>
          <p className="footer-credit">designed & built by sarah halverson © 2025</p>
        </div>

      </motion.div>
    </footer>
  );
}

export default Footer;
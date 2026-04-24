import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Data Analysis Project',
    description: 'Coming soon. Exploring a dataset and finding the story hiding in the numbers.',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    link: '#'
  },
  {
    id: 2,
    number: '02',
    title: 'Data Dashboard',
    description: 'Coming soon. A visual dashboard that turns raw data into something worth looking at.',
    tags: ['Tableau', 'Data Viz', 'Storytelling'],
    link: '#'
  },
  {
    id: 3,
    number: '03',
    title: 'This Portfolio',
    description: 'A personal portfolio built from scratch in React. Designed to be minimal, editorial, and very me.',
    tags: ['React', 'CSS', 'Framer Motion'],
    link: 'https://github.com/sarahmhalverson/portfolio-website'
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="projects-label">selected work</p>
          <h2 className="projects-heading">things i've built</h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="project-number">{project.number}</span>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow">→</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { GithubIcon } from './icons/BrandIcons';

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-glow projects-glow" aria-hidden="true" />
      <motion.div
        className="projects-head"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">MY WORK</div>
        <h2>Projects</h2>
        <p className="section-sub">Some selected work and practice projects.</p>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => {
          const featured = i === 0;

          return (
            <motion.div
              className={featured ? 'project-card project-card--featured' : 'project-card'}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="project-card__body">
                <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>
                  <project.icon size={featured ? 22 : 18} strokeWidth={1.8} className="project-card__icon" />
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="View source" aria-label="View source on GitHub">
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" title="View live" aria-label="View live project">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {featured &&
                (project.image ? (
                  <div className="project-card__visual project-card__visual--image">
                    <img src={project.image} alt="" />
                  </div>
                ) : (
                  <div className="project-card__visual" aria-hidden="true">
                    <project.icon size={72} strokeWidth={1.2} />
                  </div>
                ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { GithubIcon } from './icons/BrandIcons';

export function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-tag">04 // projects</span>
        <h2 className="section-title">Selected work.</h2>
        <p className="section-sub">Production platforms alongside practice projects built to learn something specific.</p>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => {
          const featured = i === 0;

          return (
            <motion.div
              className={`panel panel--interactive project-card${featured ? ' project-card--featured' : ''}`}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="project-card__body">
                <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>
                  <project.icon size={featured ? 20 : 17} strokeWidth={1.8} className="project-card__icon" />
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="chip" key={tag}>
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
                  <button
                    type="button"
                    className="project-card__visual project-card__visual--image"
                    onClick={() => setLightbox({ src: project.image!, alt: `${project.title} screenshot` })}
                    aria-label={`View full screenshot of ${project.title}`}
                  >
                    <img src={project.image} alt="" />
                  </button>
                ) : (
                  <div className="project-card__visual" aria-hidden="true">
                    <project.icon size={72} strokeWidth={1.2} />
                  </div>
                ))}
            </motion.div>
          );
        })}
      </div>

      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightbox(null)}
            >
              <motion.img
                key={lightbox.src}
                src={lightbox.src}
                alt={lightbox.alt}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
                <X size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}

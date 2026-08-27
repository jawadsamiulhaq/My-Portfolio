import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROFILE, ROLES, SOCIAL_LINKS } from '../data/content';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2300);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="hero-role__rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          className="hero-role__word"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="hero-eyebrow">{PROFILE.location}</span>
          <h1 className="hero-name">
            {PROFILE.firstName} {PROFILE.lastName}
          </h1>
          <p className="hero-role">
            <RotatingRole />
          </p>
          <p className="hero-desc">
            Professional experience in C#, ASP.NET Core and SQL Server, with React from personal and
            freelance work — focused on applications that scale, perform and stay maintainable.
          </p>
          <div className="hero-buttons">
            <button type="button" className="btn-primary" onClick={() => scrollToSection('contact')}>
              Get in touch
            </button>
            <button type="button" className="btn-secondary" onClick={() => scrollToSection('projects')}>
              View projects <span aria-hidden="true">→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-aside"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="profile-frame">
            <img
              src="/images/profile.webp"
              alt={PROFILE.name}
              width={320}
              height={320}
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="panel hero-facts">
            <div className="hero-facts__rows">
              <div className="hero-facts__row">
                <span className="hero-facts__key">Location</span>
                <span className="hero-facts__value">{PROFILE.location}</span>
              </div>
              <div className="hero-facts__row">
                <span className="hero-facts__key">Status</span>
                <span className="hero-facts__value available">
                  <span className="green-dot" /> {PROFILE.freelance.toLowerCase()}
                </span>
              </div>
              <div className="hero-facts__row">
                <span className="hero-facts__key">Focus</span>
                <span className="hero-facts__value">Software Engineer</span>
              </div>
            </div>
            <div className="social-icons">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="social-icon"
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

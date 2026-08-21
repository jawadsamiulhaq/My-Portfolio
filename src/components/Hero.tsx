import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
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
      {ROLES.map((role, i) => (
        <motion.span
          key={role}
          className="hero-role__word"
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
            y: i === index ? 0 : 10,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ position: i === index ? 'relative' : 'absolute' }}
          aria-hidden={i !== index}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <motion.div
        className="hero-top"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="hero-eyebrow">Full Stack Developer — Based in {PROFILE.location}</span>
        <span className="hero-availability">
          <span className="green-dot" /> Available for work
        </span>
      </motion.div>

      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        {PROFILE.firstName} <span className="accent-text">{PROFILE.lastName}</span>
      </motion.h1>

      <div className="hero-lower">
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="hero-role">
            <RotatingRole />
          </p>
          <p className="hero-desc">
            I build clean, simple and user-friendly digital products
            <br />
            that solve real world problems.
          </p>
          <div className="hero-buttons">
            <button type="button" className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me <MessageCircle size={16} />
            </button>
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
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="profile-frame">
            <div className="profile-circle">
              <img src="/images/profile.webp" alt={PROFILE.name} width={280} height={280} decoding="async" fetchPriority="high" />
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        className="scroll-cue"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}

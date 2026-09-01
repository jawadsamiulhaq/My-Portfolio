import { motion } from 'framer-motion';
import { ArrowDown, Eye, Mail, MapPin, Briefcase, User } from 'lucide-react';
import { PROFILE } from '../data/content';

const INFO_ROWS = [
  { icon: User, label: 'Name', value: PROFILE.name },
  { icon: Mail, label: 'Email', value: PROFILE.email },
  { icon: MapPin, label: 'Location', value: PROFILE.location },
  { icon: Briefcase, label: 'Freelance', value: PROFILE.freelance, highlight: true },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">A little about my approach.</h2>
          <p className="about-bio">{PROFILE.bio}</p>
          <div className="cv-buttons">
            <a href="/Jawad-Sami-Ul-Haq-CV.pdf" download className="btn-cv" title="Download CV">
              Download CV
              <ArrowDown size={15} />
            </a>
            <a
              href="/Jawad-Sami-Ul-Haq-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-cv btn-cv--ghost"
              title="Preview CV"
            >
              Preview
              <Eye size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="panel about-info-card">
            {INFO_ROWS.map(({ icon: Icon, label, value, highlight }) => (
              <div className="about-info-row" key={label}>
                <span className="info-icon">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="about-info-text">
                  <span className="info-label">{label}</span>
                  <span className={`info-value ${highlight ? 'available' : ''}`}>{value}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

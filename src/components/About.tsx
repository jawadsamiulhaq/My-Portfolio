import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Briefcase, Phone, User } from 'lucide-react';
import { PROFILE } from '../data/content';

const INFO_ROWS = [
  { icon: User, label: 'Name', value: PROFILE.name },
  { icon: Mail, label: 'Email', value: PROFILE.email },
  { icon: Phone, label: 'Phone', value: PROFILE.phone },
  { icon: MapPin, label: 'Location', value: PROFILE.location },
  { icon: Briefcase, label: 'Freelance', value: PROFILE.freelance, highlight: true },
];

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-glow about-glow" aria-hidden="true" />
      <motion.div
        className="about-head"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">ABOUT ME</div>
        <h2>Who am I?</h2>
      </motion.div>

      <motion.p
        className="about-bio"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {PROFILE.bio}
      </motion.p>

      <motion.div
        className="about-footer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5, delay: 0.14 }}
      >
        <a href="#" className="btn-cv">
          Download CV
          <ArrowDown size={16} />
        </a>
        <div className="info-row-strip">
          {INFO_ROWS.map(({ icon: Icon, label, value, highlight }) => (
            <div className="info-item" key={label}>
              <span className="info-icon">
                <Icon size={17} strokeWidth={2} />
              </span>
              <span className="info-label">{label}</span>
              <span className={`info-value ${highlight ? 'available' : ''}`}>{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/content';

const CONTACT_ORDER = ['Email', 'LinkedIn', 'GitHub'];
const CONTACT_LINKS = CONTACT_ORDER.map((label) => SOCIAL_LINKS.find((s) => s.label === label)!);

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-glow contact-glow" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">GET IN TOUCH</div>
        <h2 className="contact-heading">
          Let's work
          <br />
          together.
        </h2>
        <p className="section-sub">Have a project, idea, or opportunity? Feel free to reach out.</p>
        <div className="contact-links">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className={`contact-btn ${label === 'Email' ? '' : 'outline'}`}
            >
              <Icon size={17} />
              {label === 'Email' ? 'Email Me' : label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Languages as LanguagesIcon } from 'lucide-react';
import { EDUCATION, EXPERIENCE, LANGUAGES } from '../data/content';

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-glow experience-glow" aria-hidden="true" />
      <motion.div
        className="experience-head"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">CAREER</div>
        <h2>Experience & Education</h2>
      </motion.div>

      <div className="experience-grid">
        <motion.div
          className="experience-col"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <h3 className="experience-col__title">
            <Briefcase size={16} /> Experience
          </h3>
          {EXPERIENCE.map((exp) => (
            <div className="experience-item" key={exp.role + exp.company}>
              <div className="experience-item__top">
                <span className="experience-item__role">{exp.role}</span>
                <span className="experience-item__period">{exp.period}</span>
              </div>
              <div className="experience-item__company">
                {exp.company} — {exp.location}
              </div>
              <ul className="experience-item__bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="experience-col"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <h3 className="experience-col__title">
            <GraduationCap size={16} /> Education
          </h3>
          {EDUCATION.map((edu) => (
            <div className="experience-item" key={edu.school}>
              <div className="experience-item__top">
                <span className="experience-item__role">{edu.degree}</span>
                <span className="experience-item__period">{edu.period}</span>
              </div>
              <div className="experience-item__company">{edu.school}</div>
              {edu.gpa && <div className="experience-item__meta">GPA: {edu.gpa}</div>}
            </div>
          ))}

          <h3 className="experience-col__title experience-col__title--spaced">
            <LanguagesIcon size={16} /> Languages
          </h3>
          <div className="languages-list">
            {LANGUAGES.map((lang) => (
              <span className="language-chip" key={lang.name}>
                {lang.name}
                <span className="language-chip__level">{lang.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

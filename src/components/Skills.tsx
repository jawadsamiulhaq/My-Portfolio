import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/content';

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-glow skills-glow" aria-hidden="true" />
      <motion.div
        className="skills-head"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">MY SKILLS</div>
        <h2>My Skills</h2>
      </motion.div>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <motion.div
            className="skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.4, delay: catIndex * 0.08 }}
          >
            <h3 className="skill-card__title">{category.title}</h3>
            <div className="skill-card__items">
              {category.items.map(({ name, icon: Icon }) => (
                <span className="skill-item" key={name}>
                  <Icon size={16} strokeWidth={2} />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

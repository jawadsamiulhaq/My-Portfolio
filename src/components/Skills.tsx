import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/content';

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">The stack I work in.</h2>
        <p className="section-sub">Day to day across .NET services, React front-ends and the data layer beneath them.</p>
      </motion.div>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <motion.div
            className="panel panel--interactive skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.4, delay: catIndex * 0.08 }}
          >
            <h3 className="skill-card__title">{category.title}</h3>
            <div className="skill-card__items">
              {category.items.map(({ name, icon: Icon }) => (
                <span className="chip" key={name}>
                  <Icon size={13} strokeWidth={2} />
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

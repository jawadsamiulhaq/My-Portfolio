import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ icon: Icon, value, suffix, label }: (typeof STATS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const count = useCountUp(value, inView);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-icon">
        <Icon size={26} strokeWidth={1.8} />
      </span>
      <div>
        <div className="stat-number">
          {count}
          {suffix}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <motion.section
      className="stats-bar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5 }}
    >
      {STATS.map((stat, i) => (
        <div className="stat-wrap" key={stat.label}>
          <StatCard {...stat} />
          {i < STATS.length - 1 && <div className="stat-divider" />}
        </div>
      ))}
    </motion.section>
  );
}

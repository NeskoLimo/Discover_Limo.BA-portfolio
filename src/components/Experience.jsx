/* ═══════════════════════════════════════════════════════════════
   Experience.jsx
   SCALABILITY: All content lives in data.js experience[].
   Add new roles there — this component renders them automatically.
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { experience } from '../data';
import styles from './Experience.module.css';

function ExpItem({ item }) {
  const ref = useReveal();
  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.date}>{item.date}</div>
      <div className={styles.body}>
        <div className={styles.role}>{item.role}</div>
        <div className={styles.company}>{item.company}</div>
        <p className={styles.desc}>{item.description}</p>
        {item.metrics.length > 0 && (
          <div className={styles.metrics}>
            {item.metrics.map(m => (
              <span key={m} className="metric">{m}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience</p>
        <div className={styles.list}>
          {experience.map(item => (
            <ExpItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

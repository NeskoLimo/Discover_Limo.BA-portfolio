/* ═══════════════════════════════════════════════════════════════
   Skills.jsx
   SCALABILITY: Skill groups and items live in data.js skills[].
   Add a new group object there — this component renders it automatically.
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { skills } from '../data';
import styles from './Skills.module.css';

function SkillGroup({ group }) {
  const ref = useReveal();
  return (
    <div className={styles.group} ref={ref}>
      <div className={styles.groupTitle}>{group.category}</div>
      <div className={styles.items}>
        {group.items.map(item => (
          <span key={item} className={styles.item}>
            <span className={styles.bullet} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <div className={styles.grid}>
          {skills.map(group => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

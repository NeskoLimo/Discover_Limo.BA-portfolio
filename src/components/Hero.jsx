/* ═══════════════════════════════════════════════════════════════
   Hero.jsx
   SCALABILITY: Stats come from data.js — add/remove there.
   To add a profile photo, add an <img> next to .heroText in a
   two-column grid wrapper (see About for the pattern).
   ═══════════════════════════════════════════════════════════════ */
import { personal, stats } from '../data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">

        {/* Availability badge */}
        {personal.available && (
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for opportunities
          </div>
        )}

        {/* Name */}
        <h1 className={styles.name}>
          Bernard <em>Limo</em>
        </h1>

        {/* Roles */}
        <p className={styles.role}>
          {personal.roles.map((r, i) => (
            <span key={r}>
              {r}
              {i < personal.roles.length - 1 && <span className={styles.sep}>·</span>}
            </span>
          ))}
          <span className={styles.sep}>·</span>
          {personal.location}
        </p>

        {/* Bio — first paragraph only in hero for brevity */}
        <p className={styles.bio}>{personal.bio[0]}</p>

        {/* CTAs */}
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={`mailto:${personal.email}`} className="btn btn-secondary">Get in Touch</a>
          <a href={`tel:${personal.phone.replace(/\s/g,'')}`} className="btn btn-secondary">
            {personal.phone}
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statVal}>{s.value}</div>
              <div className={styles.statLbl}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

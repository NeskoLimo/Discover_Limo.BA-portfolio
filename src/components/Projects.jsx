/* ═══════════════════════════════════════════════════════════════
   Projects.jsx
   SCALABILITY: All content lives in data.js projects[].
   Add new projects there. Set link: 'https://...' on any project
   to enable a live URL button on that card automatically.
   To feature a project full-width: add featured: true to its data
   object and add a CSS rule: .card[data-featured] { grid-column: span 2; }
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { projects } from '../data';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.period}>{project.period}</div>
      <div className={styles.sector}>{project.sector}</div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.footer}>
        <span className={styles.impact}>{project.impact}</span>
        {/* SCALABILITY: link is rendered only when set in data.js */}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className={styles.viewLink}>
            View ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <div className={styles.grid}>
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

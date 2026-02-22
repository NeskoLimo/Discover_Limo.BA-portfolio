/* ═══════════════════════════════════════════════════════════════
   About.jsx
   IMAGE: Replace the <div className={styles.imgPlaceholder}> with:
     <img className={styles.img} src="/limo.jpg" alt="Bernard Limo" />

   To activate your photo:
   1. Create an /assets/ folder at the repo root (if not already there)
   2. Move limo.jpg into /assets/limo.jpg
   3. Swap the <div> below for the <img> line above
   4. Delete the .imgPlaceholder and .imgPlaceholder::after CSS rules

   SCALABILITY: Bio paragraphs come from data.js personal.bio[].
   Tags come from data.js tags[]. Add to either array there.
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { personal, tags } from '../data';
import styles from './About.module.css';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>

        <div className={styles.grid} ref={ref}>

          {/* ── Profile image ─────────────────────────────────────
              OPTION A (current): placeholder shown until photo is ready.
              OPTION B: once limo.jpg is in /assets/, swap to:
                <img className={styles.img} src="/limo.jpg" alt="Bernard Limo" />
          ─────────────────────────────────────────────────────── */}
          <div className={styles.imgPlaceholder} aria-label="Profile photo placeholder" />

          <div className={styles.content}>

            {/* Bio paragraphs — sourced from data.js */}
            {personal.bio.map((p, i) => (
              <p key={i} className={styles.body}>{p}</p>
            ))}

            {/* Skill tags — sourced from data.js */}
            <div className={styles.tags}>
              {tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

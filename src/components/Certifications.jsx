/* ═══════════════════════════════════════════════════════════════
   Certifications.jsx
   SCALABILITY: All certs live in data.js certifications[].
   Add new cert objects there. Set link: 'https://...' on any cert
   to make it a clickable anchor automatically.
   To add badge images: set badge: '/badges/ibm.png' in data.js
   and render <img src={item.badge}> instead of <span className={styles.dot}>.
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { certifications } from '../data';
import styles from './Certifications.module.css';

function CertItem({ item }) {
  const ref = useReveal();
  const inner = (
    <>
      <span className={styles.dot} />
      <div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.issuer}>{item.issuer}</div>
      </div>
    </>
  );

  return item.link ? (
    <a href={item.link} target="_blank" rel="noreferrer" className={`${styles.item} ${styles.linked}`} ref={ref}>
      {inner}
    </a>
  ) : (
    <div className={styles.item} ref={ref}>{inner}</div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div className="container">
        <p className="section-label">Certifications &amp; Education</p>
        <div className={styles.grid}>
          {certifications.map(cert => (
            <CertItem key={cert.id} item={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

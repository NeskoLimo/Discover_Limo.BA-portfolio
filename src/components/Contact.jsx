/* ═══════════════════════════════════════════════════════════════
   Contact.jsx
   SCALABILITY: Add new contact links to the `links` array below.
   Future slots: a <form> for direct messages, a Calendly embed,
   or a social icons row — add them after the .links div.
   ═══════════════════════════════════════════════════════════════ */
import useReveal from '../hooks/useReveal';
import { personal } from '../data';
import styles from './Contact.module.css';

// SCALABILITY: add/remove contact links here
const links = [
  {
    label: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <div className={styles.card} ref={ref}>
          <h2 className={styles.heading}>
            Let's work on something <em>meaningful</em> together.
          </h2>
          <p className={styles.sub}>
            Whether it's a complex system integration, a delivery challenge, or a product
            that needs someone who speaks both business and code — I'm open to the conversation.
          </p>
          <div className={styles.links}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={styles.link}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

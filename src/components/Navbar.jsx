/* ═══════════════════════════════════════════════════════════════
   Navbar.jsx
   SCALABILITY: Add new nav items to the `links` array below.
   For a mobile hamburger: add state + toggle logic and a
   <button className={styles.toggle}> that shows on small screens.
   ═══════════════════════════════════════════════════════════════ */
import { useEffect, useState } from 'react';
import { personal } from '../data';
import styles from './Navbar.module.css';

const links = [
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Contact',     href: '#contact' },
  // SCALABILITY: add more nav links here
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.name}>{personal.name}</span>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${styles.link} ${active === l.href.slice(1) ? styles.active : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

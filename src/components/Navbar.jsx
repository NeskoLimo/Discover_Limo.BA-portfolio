import { useEffect, useState } from 'react';
import { personal } from '../data';

const S = {
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1E2430', background: 'rgba(12,15,20,0.9)', backdropFilter: 'blur(16px)' },
  inner: { maxWidth: 760, margin: '0 auto', padding: '0 2rem', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  name: { fontSize: '0.88rem', fontWeight: 500, color: '#E8ECF2', letterSpacing: '-0.01em' },
  links: { display: 'flex', listStyle: 'none', margin: 0, padding: 0 },
  link: { display: 'block', padding: '0.35rem 0.75rem', fontSize: '0.78rem', color: '#8892A4', textDecoration: 'none', borderRadius: 4, transition: 'color 0.15s, background 0.15s', letterSpacing: '0.01em' },
  linkActive: { color: '#E8ECF2', background: '#12161D' },
};

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'What I Do',  href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [active, setActive]   = useState('');
  const [hovered, setHovered] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={S.nav}>
      <div style={S.inner}>
        <span style={S.name}>{personal.name}</span>
        <ul style={S.links}>
          {navLinks.map(l => {
            const on = active === l.href.slice(1) || hovered === l.href;
            return (
              <li key={l.href}>
                <a href={l.href} style={{ ...S.link, ...(on ? S.linkActive : {}) }}
                  onMouseEnter={() => setHovered(l.href)} onMouseLeave={() => setHovered('')}>
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

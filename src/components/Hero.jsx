import { personal, stats } from '../data';

const S = {
  section: { paddingTop: 'calc(56px + 4rem)', paddingBottom: '5rem', borderBottom: '1px solid #1E2430' },
  container: { maxWidth: 760, margin: '0 auto', padding: '0 2rem' },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    fontSize: '0.75rem', color: '#8892A4',
    background: '#12161D', border: '1px solid #1E2430',
    borderRadius: 100, padding: '0.3rem 0.85rem', marginBottom: '2rem',
  },
  dot: { width: 6, height: 6, background: '#34C97A', borderRadius: '50%', animation: 'breathe 2.5s ease-in-out infinite' },
  name: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
    lineHeight: 1.1, letterSpacing: '-0.02em',
    color: '#E8ECF2', marginBottom: '0.75rem',
  },
  nameEm: { fontStyle: 'italic', color: '#4B8EF1' },
  // Angela-style: tagline is the FIRST thing after the name — declarative, not descriptive
  tagline: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#E8ECF2', fontWeight: 300,
    lineHeight: 1.5, marginBottom: '1rem',
    maxWidth: '54ch', letterSpacing: '-0.01em',
    fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
  },
  role: { fontSize: '0.85rem', color: '#8892A4', fontWeight: 400, marginBottom: '2rem', letterSpacing: '0.02em' },
  sep: { color: '#4E5A6B', margin: '0 0.5rem' },
  actions: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  statsRow: {
    display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
    marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1E2430',
  },
  statVal: { fontFamily: "'Instrument Serif', serif", fontSize: '1.9rem', color: '#E8ECF2', lineHeight: 1 },
  statLbl: { fontSize: '0.73rem', color: '#4E5A6B', marginTop: '0.2rem' },
};

const btnPrimary   = { display: 'inline-flex', alignItems: 'center', padding: '0.6rem 1.25rem', fontSize: '0.82rem', fontWeight: 500, borderRadius: 4, textDecoration: 'none', background: '#4B8EF1', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' };
const btnSecondary = { ...btnPrimary, background: '#12161D', color: '#8892A4', border: '1px solid #1E2430' };

export default function Hero() {
  return (
    <>
      <style>{`@keyframes breathe{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
      <section id="home" style={S.section}>
        <div style={S.container}>

          {personal.available && (
            <div style={S.badge}><span style={S.dot} />Available for opportunities</div>
          )}

          <h1 style={S.name}>Bernard <em style={S.nameEm}>Limo</em></h1>

          {/* Authority-first tagline — the "what I stand for" line */}
          <p style={S.tagline}>"{personal.tagline}"</p>

          <p style={S.role}>
            {personal.roles.map((r, i) => (
              <span key={r}>{r}{i < personal.roles.length - 1 && <span style={S.sep}>·</span>}</span>
            ))}
            <span style={S.sep}>·</span>{personal.location}
          </p>

          <div style={S.actions}>
            <a href="#expertise" style={btnPrimary}>What I Do</a>
            <a href="#projects"  style={btnSecondary}>View Projects</a>
            <a href={`mailto:${personal.email}`} style={btnSecondary}>Get in Touch</a>
          </div>

          <div style={S.statsRow}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={S.statVal}>{s.value}</div>
                <div style={S.statLbl}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { personal, tags } from '../data';

const S = {
  section: { padding: '5rem 0', borderBottom: '1px solid #1E2430' },
  container: { maxWidth: 760, margin: '0 auto', padding: '0 2rem' },
  label: { fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4B8EF1', marginBottom: '2rem', display: 'block' },
  grid: { display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'flex-start', opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease' },
  imgPlaceholder: { width: 120, height: 120, borderRadius: 4, background: '#12161D', border: '1px solid #1E2430', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  imgLabel: { fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', color: '#4E5A6B', textTransform: 'uppercase' },
  img: { width: 120, height: 120, borderRadius: 4, objectFit: 'cover', display: 'block', border: '1px solid #1E2430' },
  content: { display: 'flex', flexDirection: 'column' },
  // Angela-style: first paragraph is bold/larger — the authority statement
  bodyLead: { fontSize: '1rem', lineHeight: 1.8, color: '#C8D3E0', fontWeight: 400, marginBottom: '1rem' },
  body: { fontSize: '0.93rem', lineHeight: 1.85, color: '#8892A4', fontWeight: 300, marginBottom: '1rem' },
  // Industries row — Angela lists these explicitly
  industriesRow: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1rem 0' },
  industryChip: { fontSize: '0.75rem', padding: '0.25rem 0.65rem', background: 'rgba(75,142,241,0.1)', color: '#4B8EF1', borderRadius: 4, fontWeight: 500, border: '1px solid rgba(75,142,241,0.2)' },
  industriesLabel: { fontSize: '0.72rem', color: '#4E5A6B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' },
  tag: { fontSize: '0.77rem', padding: '0.3rem 0.75rem', background: '#12161D', border: '1px solid #1E2430', borderRadius: 4, color: '#8892A4', cursor: 'default', transition: 'border-color 0.15s, color 0.15s' },
};

function Tag({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span style={{ ...S.tag, ...(hovered ? { borderColor: '#4B8EF1', color: '#4B8EF1' } : {}) }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {label}
    </span>
  );
}

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" style={S.section}>
      <div style={S.container}>
        <span style={S.label}>About</span>
        <div style={S.grid} ref={ref}>

          {/* IMAGE — swap <div> for <img src="/limo.jpg" style={S.img} alt="Bernard Limo" /> when photo is ready */}
          <div style={S.imgPlaceholder}><span style={S.imgLabel}>Photo</span></div>

          <div style={S.content}>
            {/* First paragraph renders larger — Angela-style authority lead */}
            {personal.bio.map((p, i) => (
              <p key={i} style={i === 0 ? S.bodyLead : S.body}>{p}</p>
            ))}

            {/* Industries — explicit like Angela's page */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={S.industriesLabel}>Industries Served</div>
              <div style={S.industriesRow}>
                {personal.industries.map(ind => (
                  <span key={ind} style={S.industryChip}>{ind}</span>
                ))}
              </div>
            </div>

            {/* Tools & frameworks tags */}
            <div style={S.tagRow}>
              {tags.map(t => <Tag key={t} label={t} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}git

/* ═══════════════════════════════════════════════════════════════
   useReveal.js — Intersection Observer hook for scroll animations.
   Usage: const ref = useReveal();  →  <div ref={ref} className="reveal">
   SCALABILITY: Pass options object to customise threshold/rootMargin.
   ═══════════════════════════════════════════════════════════════ */
import { useEffect, useRef } from 'react';

export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

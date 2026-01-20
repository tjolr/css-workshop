import { useEffect, useRef } from 'react';
import './Homepage.css';

export function Homepage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty('--mouse-x', `${x}`);
      container.style.setProperty('--mouse-y', `${y}`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="homepage" ref={containerRef}>
      <div className="homepage-bg">
        <div className="homepage-gradient homepage-gradient-1" />
        <div className="homepage-gradient homepage-gradient-2" />
        <div className="homepage-gradient homepage-gradient-3" />
        <div className="homepage-glow" />
      </div>
      <h1 className="homepage-title">DEN OM CSS</h1>
      <p className="homepage-subtitle">Frontend nørdsa januar 2026</p>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface SpawnedCircle {
  id: number;
  x: number;
  y: number;
  size: number;
  gradient: string;
  animationDuration: number;
}

const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)',
];

export function Homepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [spawnedCircles, setSpawnedCircles] = useState<SpawnedCircle[]>([]);
  const [animateCounter, setAnimateCounter] = useState(false);
  const idRef = useRef(0);

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

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = idRef.current++;

      // Add ripple effect
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 1000);

      // Spawn a new circle at click position
      const circleId = idRef.current++;
      const clickX = ((e.clientX - rect.left) / rect.width) * 100;
      const clickY = ((e.clientY - rect.top) / rect.height) * 100;
      const newCircle: SpawnedCircle = {
        id: circleId,
        x: clickX,
        y: clickY,
        size: Math.random() * 200 + 150, // 150-350px
        gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
        animationDuration: Math.random() * 6 + 8, // 8-14s
      };
      // Limit to 15 circles max for performance
      setSpawnedCircles((prev) => [...prev.slice(-14), newCircle]);

      // Trigger counter animation
      setAnimateCounter(true);
      setTimeout(() => setAnimateCounter(false), 600);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
    };
  }, []);

  const subtitleText = 'Frontend nørdsa januar 2026';

  return (
    <div className="homepage" ref={containerRef}>
      <div className="homepage-bg">
        <div className="homepage-gradient homepage-gradient-1" />
        <div className="homepage-gradient homepage-gradient-2" />
        <div className="homepage-gradient homepage-gradient-3" />
        {spawnedCircles.map((circle) => (
          <div
            key={circle.id}
            className="homepage-gradient spawned-circle"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: circle.size,
              height: circle.size,
              background: circle.gradient,
              animationDuration: `${circle.animationDuration}s`,
            }}
          />
        ))}
        <div className="homepage-glow" />
      </div>

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      <h1 className="homepage-title">
        <span className="title-text">DEN OM CSS</span>
        <span className="title-glitch" aria-hidden="true">DEN OM CSS</span>
        <span className="title-glitch" aria-hidden="true">DEN OM CSS</span>
      </h1>

      <p className="homepage-subtitle">
        {subtitleText.split('').map((char, i) => (
          <span
            key={i}
            className="subtitle-char"
            style={{ '--char-index': i } as React.CSSProperties}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>

      {spawnedCircles.length > 0 && (
        <div className="circle-counter-container">
          <div className={`circle-counter ${animateCounter ? 'animate' : ''}`}>
            {String(spawnedCircles.length).split('').map((digit, i) => (
              <span
                key={i}
                className="counter-char"
                style={{ '--char-index': i } as React.CSSProperties}
              >
                {digit}
              </span>
            ))}
            <span
              className="counter-char"
              style={{ '--char-index': String(spawnedCircles.length).length } as React.CSSProperties}
            >
              {'\u00A0'}
            </span>
            {'sirkler'.split('').map((char, i) => (
              <span
                key={`label-${i}`}
                className="counter-char"
                style={{ '--char-index': String(spawnedCircles.length).length + 1 + i } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </div>
          <button
            className="reset-button"
            onClick={(e) => {
              e.stopPropagation();
              setSpawnedCircles([]);
            }}
            aria-label="Nullstill sirkler"
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
        </div>
      )}
    </div>
  );
}

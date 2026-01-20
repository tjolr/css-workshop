import { useEffect, useRef, useState } from 'react';

interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(Math.round(entry.contentRect.width));
      }
    });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Responsivt Kort</h2>
          {width !== null && (
            <span className={styles.widthIndicator}>{width}px</span>
          )}
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardText}>
            Dette kortet skal være responsivt og tilpasse seg skjermstørrelsen.
            Det skal ha en minimumsbredde på 300px, en maksbredde på 600px,
            og skalere flytende mellom disse verdiene.
          </p>
          <p className={styles.cardText}>
            Prøv å endre størrelsen på vinduet for å se hvordan kortet tilpasser seg.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <button className={styles.button}>Les mer</button>
        </div>
      </div>
    </div>
  );
};

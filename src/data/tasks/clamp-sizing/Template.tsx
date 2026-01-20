interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Responsivt Kort</h2>
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

interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.cardIcon}>🎨</div>
        <h3 className={styles.cardTitle}>Design</h3>
        <p className={styles.cardText}>Create beautiful interfaces</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardIcon}>⚡</div>
        <h3 className={styles.cardTitle}>Fast</h3>
        <p className={styles.cardText}>Optimized performance</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardIcon}>🔒</div>
        <h3 className={styles.cardTitle}>Secure</h3>
        <p className={styles.cardText}>Built-in security features</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardIcon}>📱</div>
        <h3 className={styles.cardTitle}>Responsive</h3>
        <p className={styles.cardText}>Works on all devices</p>
      </div>
    </div>
  </div>
);

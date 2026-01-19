interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.background}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
    <div className={styles.card}>
      <h2 className={styles.title}>Glassmorphism</h2>
      <p className={styles.text}>
        A frosted glass effect using backdrop-filter and semi-transparent backgrounds.
      </p>
      <button className={styles.button}>Learn More</button>
    </div>
  </div>
);

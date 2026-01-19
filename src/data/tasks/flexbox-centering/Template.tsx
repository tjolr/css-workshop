interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <span className={styles.text}>Centered!</span>
    </div>
  </div>
);

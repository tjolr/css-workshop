interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <button className={styles.button}>
        Hover me
        <span className={styles.tooltip}>This is a tooltip!</span>
      </button>
    </div>
  </div>
);

interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h3 className={styles.title}>Card Title</h3>
      <span className={styles.badge}>New</span>
    </div>
    <div className={styles.body}>
      <p className={styles.text}>
        This is the card content. Use CSS nesting to style all the child elements from within the parent selector.
      </p>
    </div>
    <div className={styles.footer}>
      <button className={styles.button}>Cancel</button>
      <button className={styles.buttonPrimary}>Save</button>
    </div>
  </div>
);

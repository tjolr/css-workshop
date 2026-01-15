interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div>
    <p className={styles.text}>Task coming soon...</p>
  </div>
);

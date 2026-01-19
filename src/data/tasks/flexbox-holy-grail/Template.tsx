interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <header className={styles.header}>Header</header>
    <aside className={styles.sidebar}>Sidebar</aside>
    <main className={styles.main}>Main Content</main>
    <footer className={styles.footer}>Footer</footer>
  </div>
);

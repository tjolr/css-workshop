interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>DevCo</div>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <a href="#" className={styles.menuLink}>Home</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#" className={styles.menuLink}>Products</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#" className={styles.menuLink}>About</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#" className={styles.menuLink}>Contact</a>
      </li>
    </ul>
  </nav>
);

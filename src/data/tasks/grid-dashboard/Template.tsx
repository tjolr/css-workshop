interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.dashboard}>
    <div className={`${styles.card} ${styles.cardLarge}`}>
      <h3 className={styles.cardTitle}>Revenue</h3>
      <p className={styles.cardValue}>$24,500</p>
      <p className={styles.cardSubtext}>+12% from last month</p>
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Users</h3>
      <p className={styles.cardValue}>1,240</p>
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Orders</h3>
      <p className={styles.cardValue}>356</p>
    </div>
    <div className={`${styles.card} ${styles.cardTall}`}>
      <h3 className={styles.cardTitle}>Activity</h3>
      <ul className={styles.activityList}>
        <li>New user signup</li>
        <li>Order #1234 completed</li>
        <li>Payment received</li>
        <li>New review posted</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Rating</h3>
      <p className={styles.cardValue}>4.8</p>
    </div>
  </div>
);

interface TemplateProps {
  styles: Record<string, string>;
}

const avatarIds = [12, 25, 33, 41, 57];

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.avatarGroup}>
      {avatarIds.map((id) => (
        <img
          key={id}
          className={styles.avatar}
          src={`https://i.pravatar.cc/100?img=${id}`}
          alt={`User ${id}`}
        />
      ))}
    </div>
  </div>
);

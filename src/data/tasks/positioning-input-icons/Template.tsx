import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.inputWrapper}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        color="var(--color-text-muted)"
      />
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        defaultValue="React hooks"
      />
        <FontAwesomeIcon className={styles.clearIcon} icon={faXmark} color="var(--color-text-muted)" />
    </div>
  </div>
);

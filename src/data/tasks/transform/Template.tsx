import {
  faArrowUpRightFromSquare,
  faBookmark,
  faEllipsisVertical,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TemplateProps {
  styles: Record<string, string>;
}

export const Template = ({ styles }: TemplateProps) => (
  <div>
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <button className={styles.btn}>
          <span>✅</span>
        </button>
        <button className={styles.btn}>
          <span>👀</span>
        </button>
        <button className={styles.btn}>
          <span>🚀</span>
        </button>
        <button className={styles.btn}>
          <FontAwesomeIcon icon={faGear} color="var(--color-text-muted)" />
        </button>
        <button className={styles.btn}>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            color="var(--color-text-muted)"
          />
        </button>
        <button className={styles.btn}>
          <FontAwesomeIcon icon={faBookmark} color="var(--color-text-muted)" />
        </button>
        <button className={styles.btn}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            color="var(--color-text-muted)"
          />
        </button>
      </div>
    </div>
  </div>
);
